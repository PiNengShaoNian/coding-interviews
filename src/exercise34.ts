import TreeNode from './model/TreeNode'
import { buildTree } from './util/buildTree'
import LoopQueue from './util/LoopQueue'

export const findPath = (root: TreeNode<number>, target: number): number => {
  const distTo: Map<TreeNode<number>, number> = new Map()
  const queue: LoopQueue<TreeNode<number>> = new LoopQueue()
  let res = 0

  queue.enqueue(root)
  distTo.set(root, root.value)

  while (queue.size()) {
    const node = queue.dequeue()!

    if (node.left) {
      queue.enqueue(node.left)
      distTo.set(node.left, distTo.get(node)! + node.left.value)
    }
    if (node.right) {
      queue.enqueue(node.right)
      distTo.set(node.right, distTo.get(node)! + node.right.value)
    }
  }

  for (const distance of distTo.values()) {
    if (distance === target) res++
  }

  return res
}

export const findPathRecursively = (
  root: TreeNode<number>,
  target: number
): number[] => {
  const paths: number[] = []
  const currentSum: number = 0
  const findPath = (
    root: TreeNode<number>,
    currentSum: number,
    targetSum: number,
    paths: number[]
  ): boolean => {
    currentSum += root.value
    paths.push(root.value)

    if (currentSum === target && !root.left && !root.right) {
      return true
    }

    if (root.left && findPath(root.left, currentSum, targetSum, paths))
      return true
    if (root.right && findPath(root.right, currentSum, targetSum, paths))
      return true
    paths.pop()
    return false
  }

  findPath(root, currentSum, target, paths)

  return paths
}

const root = buildTree([10, 5, 4, 7, 12], [4, 5, 7, 10, 12])
findPathRecursively(root!, 22)
