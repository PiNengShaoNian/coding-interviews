import { verify } from 'crypto'
import { DiagnosticCategory, setCommentRange } from 'typescript'
import ArrayStack from './util/ArrayStack'
import Bag from './util/Bag'
import Digraph from './util/Digraph'
import DirectedDFS from './util/DirectedDFS'

export const match = (str: string, pattern: string) => {
  if (!str) return true
  if (!pattern) return false

  const matchCore = (strIndex: number, patternIndex: number): boolean => {
    if (strIndex > str.length && patternIndex > pattern.length) return true

    if (patternIndex === pattern.length && strIndex !== str.length) return false

    if (pattern[patternIndex + 1] === '*') {
      if (
        pattern[patternIndex] === '.' ||
        (pattern[patternIndex] === str[strIndex] && strIndex !== str.length)
      ) {
        return (
          matchCore(strIndex + 1, patternIndex + 2) ||
          matchCore(strIndex + 1, patternIndex) ||
          matchCore(strIndex, patternIndex + 2)
        )
      } else {
        return matchCore(strIndex, patternIndex + 2)
      }
    }
    if (
      str[strIndex] === pattern[patternIndex] ||
      (pattern[patternIndex] === '.' && strIndex !== str.length)
    ) {
      return matchCore(strIndex + 1, patternIndex + 1)
    }

    return false
  }

  return matchCore(0, 0)
}

class RangeComplement {
  constructor(public leftCharacter: string, public rightCharacter: string) {}
}

export class RegularExpressionMatcher {
  protected regularExpression: string
  protected digraph: Digraph
  protected numberOfStates: number

  protected setsMatchMap: Map<number, number>
  protected setsComplementMap: Map<number, Set<string>>
  protected setsComplementRangesMap: Map<number, RangeComplement[]>

  constructor(regularExpressionString: string) {
    const operators = new ArrayStack<number>()
    this.regularExpression = regularExpressionString
    this.numberOfStates = regularExpressionString.length

    this.setsMatchMap = new Map()
    this.setsComplementMap = new Map()
    this.setsComplementRangesMap = new Map()

    this.digraph = new Digraph(this.numberOfStates + 1)

    for (let i = 0; i < this.numberOfStates; i++) {
      let leftOperator = i

      if (
        this.regularExpression[i] === '(' ||
        this.regularExpression[i] === '|' ||
        this.regularExpression[i] === '['
      ) {
        operators.push(i)
      } else if (this.regularExpression[i] === ')') {
        leftOperator = this.handleRightParenthesis(operators, i)
      } else if (this.regularExpression[i] === ']') {
        leftOperator = operators.pop()!
        this.handleSets(leftOperator, i)
      }

      if (i < this.numberOfStates - 1) {
        if (this.regularExpression[i + 1] === '*') {
          this.digraph.addEdge(leftOperator, i + 1)
          this.digraph.addEdge(i + 1, leftOperator)
        } else if (this.regularExpression[i + 1] === '+') {
          this.digraph.addEdge(i + 1, leftOperator)
        }
      }

      if (
        this.regularExpression[i] === '(' ||
        this.regularExpression[i] === '*' ||
        this.regularExpression[i] === ')' ||
        this.regularExpression[i] === '+' ||
        this.regularExpression[i] === '[' ||
        this.regularExpression[i] === ']'
      ) {
        this.digraph.addEdge(i, i + 1)
      }
    }
  }

  protected handleRightParenthesis(
    operators: ArrayStack<number>,
    index: number
  ): number {
    const orOperatorIndexes = new Set<number>()

    while (this.regularExpression[operators.peek()!] === '|') {
      const or = operators.pop()!
      orOperatorIndexes.add(or)
    }

    const leftOperator = operators.pop()!

    for (const orOperatorIndex of orOperatorIndexes.keys()) {
      this.digraph.addEdge(orOperatorIndex, index)
      this.digraph.addEdge(leftOperator, orOperatorIndex + 1)
    }

    return leftOperator
  }

  protected handleSets(leftSquareBracket: number, index: number): void {
    let isComplementSet = false
    let charactersToComplement: Set<string> | null = null
    let rangesToComplement: RangeComplement[] | null = null

    //处理字符集补集
    //如果是一个补集操作符，就把所有字符放进一个Set方便后面识别
    if (this.regularExpression[leftSquareBracket + 1] === '^') {
      isComplementSet = true
      leftSquareBracket++ //没有必要在下一个循环去检查这个字符了
      charactersToComplement = new Set()
      rangesToComplement = []

      for (
        let indexInsideBrackets = leftSquareBracket + 1;
        indexInsideBrackets < index;
        indexInsideBrackets++
      ) {
        if (this.regularExpression[indexInsideBrackets + 1] === '-') {
          const leftCharacter = this.regularExpression[indexInsideBrackets]
          const rightCharacter = this.regularExpression[indexInsideBrackets + 2]

          rangesToComplement.push(
            new RangeComplement(leftCharacter, rightCharacter)
          )

          indexInsideBrackets += 2
        } else {
          charactersToComplement.add(
            this.regularExpression[indexInsideBrackets]
          )
        }
      }
    }

    //处理所有字符集
    for (
      let indexInsideBrackets = leftSquareBracket + 1;
      indexInsideBrackets < index;
      indexInsideBrackets++
    ) {
      this.digraph.addEdge(leftSquareBracket, indexInsideBrackets)

      //当匹配发生在在字符集中时，DFA会跳转到右中括号所在的状态
      this.setsMatchMap.set(indexInsideBrackets, index)

      if (isComplementSet) {
        this.setsComplementMap.set(indexInsideBrackets, charactersToComplement!)

        if (rangesToComplement!.length > 0) {
          this.setsComplementRangesMap.set(
            indexInsideBrackets,
            rangesToComplement!
          )
        }
      }

      if (this.regularExpression[indexInsideBrackets + 1] === '-') {
        indexInsideBrackets += 2
      }
    }
  }

  protected recognizeSet(
    text: string,
    index: number,
    vertex: number,
    states: Bag<number>
  ): void {
    const indexOfRightSquareBracket = this.setsMatchMap.get(vertex)!

    if (this.regularExpression[vertex + 1] === '-') {
      const leftRangeIndex = this.regularExpression[vertex]
      const rightRangeIndex = this.regularExpression[vertex + 2]

      if (
        leftRangeIndex <= text.charAt(index) &&
        text.charAt(index) <= rightRangeIndex
      ) {
        if (!this.isCharPartOfComplementSet(text, index, vertex)) {
          states.add(indexOfRightSquareBracket)
        }
      } else if (
        this.setsComplementMap.has(vertex) &&
        !this.isCharPartOfComplementSet(text, index, vertex)
      ) {
        states.add(indexOfRightSquareBracket)
      }
    } else if (
      this.regularExpression[vertex] === text[index] ||
      this.regularExpression[vertex] === '.'
    ) {
      if (!this.isCharPartOfComplementSet(text, index, vertex)) {
        states.add(indexOfRightSquareBracket)
      }
    } else if (
      this.setsComplementMap.has(vertex) &&
      !this.isCharPartOfComplementSet(text, index, vertex)
    ) {
      states.add(indexOfRightSquareBracket)
    }
  }

  protected isCharPartOfComplementSet(
    text: string,
    index: number,
    vertex: number
  ): boolean {
    //检查补集map
    if (
      this.setsComplementMap.has(vertex) &&
      this.setsComplementMap.get(vertex)!.has(text[index])
    )
      return true

    //检查补集 rangesMap
    if (this.setsComplementRangesMap.has(vertex)) {
      for (const rangeComplement of this.setsComplementRangesMap.get(vertex)!) {
        if (
          rangeComplement.leftCharacter <= text[index] &&
          text[index] <= rangeComplement.rightCharacter
        )
          return true
      }
    }

    return false
  }

  recognizes(text: string): boolean {
    let allPossibleStates: Bag<number> = new Bag()
    let directedDFS = new DirectedDFS(this.digraph, 0)
    for (let vertex = 0; vertex < this.digraph.V(); vertex++) {
      if (directedDFS.marked(vertex)) {
        allPossibleStates.add(vertex)
      }
    }

    for (let i = 0; i < text.length; i++) {
      const states = new Bag<number>()

      for (const vertex of allPossibleStates) {
        if (vertex < this.numberOfStates) {
          if (this.setsMatchMap.has(vertex)) {
            this.recognizeSet(text, i, vertex, states)
          } else if (
            this.regularExpression[vertex] === text[i] ||
            this.regularExpression[vertex] === '.'
          ) {
            states.add(vertex + 1)
          }
        }
      }

      allPossibleStates = new Bag<number>()

      directedDFS = new DirectedDFS(this.digraph, states)

      for (let vertex = 0; vertex < this.digraph.V(); vertex++) {
        if (directedDFS.marked(vertex)) {
          allPossibleStates.add(vertex)
        }
      }

      if (allPossibleStates.size() === 0) {
        return false
      }
    }

    for (const vertex of allPossibleStates) {
      if (vertex === this.numberOfStates) return true
    }

    return false
  }
}

export const matchSolution2 = (str: string, pattern: string): boolean => {
  const matcher = new RegularExpressionMatcher(pattern)

  return matcher.recognizes(str)
}
