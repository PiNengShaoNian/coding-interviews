import LoopQueue from './util/LoopQueue'
import { default as BSTNode } from './model/TreeNode'

export class TreeNode<Value> {
  constructor(public value: Value, public children: TreeNode<Value>[] = []) {}
}

export const getLastCommonParent = <Value>(
  root: TreeNode<Value>,
  node1: TreeNode<Value>,
  node2: TreeNode<Value>
): TreeNode<Value> | null => {
  const edgeTo: Map<TreeNode<Value>, TreeNode<Value>> = new Map()

  edgeTo.set(root, root)

  const dfs = (node: TreeNode<Value>) => {
    for (const child of node.children) {
      edgeTo.set(child, node)
      dfs(child)
    }
  }

  dfs(root)

  const list1 = new LoopQueue<TreeNode<Value>>()
  const list2 = new LoopQueue<TreeNode<Value>>()

  for (
    let x: undefined | TreeNode<Value> = edgeTo.get(node1);
    x && x !== edgeTo.get(x);
    x = edgeTo.get(x)
  ) {
    list1.enqueue(x)
  }

  list1.enqueue(root)

  for (
    let x: undefined | TreeNode<Value> = edgeTo.get(node2);
    x && x !== edgeTo.get(x);
    x = edgeTo.get(x)
  ) {
    list2.enqueue(x)
  }

  list2.enqueue(root)

  const diff = Math.abs(list1.size() - list2.size())

  let longerList: LoopQueue<TreeNode<Value>>
  if (diff > 0) {
    longerList = list2.size() > list1.size() ? list2 : list1

    for (let i = 0; i < diff; i++) {
      longerList.dequeue()
    }
  }

  while (list1.size()) {
    const parent1 = list1.dequeue()
    const parent2 = list2.dequeue()

    if (parent1 === parent2) return parent1
  }

  return null
}

export const getLastCommonParentSolution1 = <Value>(
  root: TreeNode<Value>,
  node1: TreeNode<Value>,
  node2: TreeNode<Value>
): TreeNode<Value> | null => {
  const path1: TreeNode<Value>[] = []
  const path2: TreeNode<Value>[] = []

  const collect = (
    root: TreeNode<Value>,
    node: TreeNode<Value>,
    path: TreeNode<Value>[]
  ): boolean => {
    if (root === node) return true

    path.push(root)
    for (const child of root.children) {
      if (collect(child, node, path)) return true
    }

    path.pop()
    return false
  }

  collect(root, node1, path1)
  collect(root, node2, path2)

  const diff = Math.abs(path1.length - path2.length)

  let longerList: TreeNode<Value>[]
  if (diff > 0) {
    longerList = path1.length > path2.length ? path1 : path2

    for (let i = 0; i < diff; i++) {
      longerList.pop()
    }
  }

  while (path1.length) {
    const parent1 = path1.pop()!
    const parent2 = path2.pop()!

    if (parent1 === parent2) return parent1
  }

  return null
}

export const getLastCommonParentInBST = (
  root: BSTNode<number>,
  node1: BSTNode<number>,
  node2: BSTNode<number>
): BSTNode<number> | null => {
  const getNode = (
    root: BSTNode<number> | null,
    small: number,
    big: number
  ): BSTNode<number> | null => {
    if (!root) return null

    if (root.value < big && root.value > small) {
      return root
    } else if (root.value > big) {
      const leftNode = getNode(root.left, small, big)

      if (!leftNode) return root
      else return leftNode
    } else if (root.value < small) {
      const rightNode = getNode(root.right, small, big)
      if (!rightNode) {
        return root
      } else return rightNode
    } else return null
  }

  let small = Math.min(node1.value, node2.value)
  let big = Math.max(node1.value, node2.value)

  return getNode(root, small, big)
}
