import TreeNode from './model/TreeNode'

export const kThNode = <Value>(
  root: TreeNode<Value>,
  k: number
): TreeNode<Value> | null => {
  if (k <= 0) return null
  const kThNodeCore = (
    root: TreeNode<Value> | null
  ): TreeNode<Value> | null => {
    let target: TreeNode<Value> | null = null

    if (root?.left && target === null) {
      target = kThNodeCore(root.left)
    }
    if (target === null) {
      if (k === 1) target = root
      k--
    }

    if (root?.right && target === null) {
      target = kThNodeCore(root.right)
    }

    return target
  }

  return kThNodeCore(root)
}
