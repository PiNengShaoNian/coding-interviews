import TreeNode from './model/TreeNode'

export const treeDepth = <Value>(root: TreeNode<Value> | null): number => {
  if (!root) return 0

  return 1 + Math.max(treeDepth(root.left), treeDepth(root.right))
}

export const isBalanced = <Value>(root: TreeNode<Value> | null): boolean => {
  if (!root) return true

  let result = true

  const depthOfLeft = treeDepth(root.left)
  const depthOfRight = treeDepth(root.right)

  if (Math.abs(depthOfLeft - depthOfRight) > 1) result = false

  if (result) result = isBalanced(root.left)

  if (result) result = isBalanced(root.right)

  return result
}

type RefObject<Value> = {
  current: Value
}
const useRef = <Value>(value: Value): RefObject<Value> => ({
  current: value,
})

export const isBalancedSolution1 = <Value>(
  root: TreeNode<Value> | null
): boolean => {
  const _isBalancedSolution1 = (
    root: TreeNode<Value> | null,
    depth: RefObject<number>
  ): boolean => {
    if (!root) {
      depth.current = 0
      return true
    }

    const left = useRef(0)
    const right = useRef(0)

    if (
      _isBalancedSolution1(root.left, left) &&
      _isBalancedSolution1(root.right, right)
    ) {
      const diff = Math.abs(left.current - right.current)

      if (diff <= 1) {
        depth.current = 1 + Math.max(left.current, right.current)
        return true
      }
    }
    return false
  }

  return _isBalancedSolution1(root, useRef(0))
}
