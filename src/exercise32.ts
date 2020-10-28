import { buildTree } from './exercise7'
import TreeNode from './model/TreeNode'
import ArrayStack from './util/ArrayStack'
import LoopQueue from './util/LoopQueue'

export const printFromTopToBottom = <Value>(root: TreeNode<Value>): Value[] => {
  //BFS
  const res: Value[] = []
  const queue = new LoopQueue<TreeNode<Value>>()
  queue.enqueue(root)

  while (queue.size()) {
    const node = queue.dequeue()!
    res.push(node.value)

    node.left && queue.enqueue(node.left)
    node.right && queue.enqueue(node.right)
  }

  return res
}

export const printLayerByLayerIteratively = <Value>(
  root: TreeNode<Value>
): Value[][] => {
  const res: Value[][] = []

  const dfs = (node: TreeNode<Value>, depth: number) => {
    if (!res[depth]) res[depth] = []

    res[depth].push(node.value)

    node.left && dfs(node.left, depth + 1)
    node.right && dfs(node.right, depth + 1)
  }

  dfs(root, 0)

  return res
}

export const printLayerByLayerRecursively = <Value>(
  root: TreeNode<Value>
): Value[][] => {
  const res: Value[][] = []

  const queue = new LoopQueue<TreeNode<Value>>()
  queue.enqueue(root)
  let toBePrinted = 1
  let nextLevel = 0
  let curLevel = 0

  while (queue.size()) {
    const node = queue.dequeue()!

    if (node.left) {
      nextLevel++
      queue.enqueue(node.left)
    }

    if (node.right) {
      nextLevel++
      queue.enqueue(node.right)
    }

    if (!res[curLevel]) res[curLevel] = []
    res[curLevel].push(node.value)
    toBePrinted--

    if (toBePrinted === 0) {
      toBePrinted = nextLevel
      nextLevel = 0
      curLevel++
    }
  }

  return res
}

export const printCurved = <Value>(root: TreeNode<Value>): Value[] => {
  const res: Value[] = []

  let curLevelStack = new ArrayStack<TreeNode<Value>>()
  let nextLevelStack = new ArrayStack<TreeNode<Value>>()

  curLevelStack.push(root)
  let curLevel = 0

  while (curLevelStack.size()) {
    while (curLevelStack.size()) {
      const node = curLevelStack.pop()!
      res.push(node.value)

      if (curLevel % 2 === 1) {
        node.right && nextLevelStack.push(node.right)
        node.left && nextLevelStack.push(node.left)
      } else {
        node.left && nextLevelStack.push(node.left)
        node.right && nextLevelStack.push(node.right)
      }
    }

    curLevelStack = nextLevelStack
    nextLevelStack = new ArrayStack()
    curLevel++
  }

  return res
}
