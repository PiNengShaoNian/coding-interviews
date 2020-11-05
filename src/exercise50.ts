export const firstNotRepeatingChar = (string: string): string | null => {
  const map: number[] = []

  for (let i = 0; i < string.length; i++) {
    const index = string.charCodeAt(i)
    map[index] = (map[index] ?? 0) + 1
  }

  for (let i = 0; i < string.length; i++) {
    const index = string.charCodeAt(i)

    if (map[index] === 1) return string[i]
  }

  return null
}

export const deleteChars = (string: string, chars: string): string => {
  const charsMap: number[] = []

  for (let i = 0; i < chars.length; i++) {
    charsMap[chars.charCodeAt(i)] = 1
  }

  let res = ''

  for (let i = 0; i < string.length; i++) {
    if (!charsMap[string.charCodeAt(i)]) res += string[i]
  }

  return res
}

export const deleteDuplication = (string: string): string => {
  const charsMap: boolean[] = []

  let res = ''

  for (let i = 0; i < string.length; i++) {
    if (!charsMap[string.charCodeAt(i)]) {
      res += string[i]
      charsMap[string.charCodeAt(i)] = true
    }
  }

  return res
}

export const isAnagram = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false

  const charsMap: number[] = Array.from({ length: 256 }, () => 0)

  for (let i = 0; i < a.length; i++) {
    charsMap[a.charCodeAt(i)]++
  }

  for (let i = 0; i < b.length; i++) {
    charsMap[b.charCodeAt(i)]--
  }

  for (let i = 0; i < charsMap.length; i++) {
    if (charsMap[i] !== 0) return false
  }
  return true
}

export class CharsStatistics {
  private charsMap: number[] = Array.from({ length: 256 }, () => -1)
  private curIndex: number = 0

  insert(char: string): void {
    const index = char.charCodeAt(0)
    if (this.charsMap[index] >= 0) this.charsMap[index] = -2
    else this.charsMap[index] = this.curIndex++
  }

  firstAppearingOnce(): string | null {
    let minIndex = Infinity
    let minCharCode = Infinity
    for (let i = 0; i < this.charsMap.length; i++) {
      if (this.charsMap[i] >= 0 && this.charsMap[i] < minIndex) {
        minIndex = this.charsMap[i]
        minCharCode = i
      }
    }

    return minCharCode < Infinity ? String.fromCharCode(minCharCode) : null
  }
}
