import TreeNode from './model/TreeNode'

export const isSymmetrical = (root: TreeNode<any>): boolean => {
  const _isSymmetrical = (
    root1: TreeNode<any> | null,
    root2: TreeNode<any> | null
  ): boolean => {
    if (!root1 && !root2) return true
    
    if (!root1 || !root2) return false

    if (root1!.value !== root2!.value) return false
    let result: boolean
    result =
      _isSymmetrical(root1!.left, root2!.right) &&
      _isSymmetrical(root1!.right, root2!.left)

    return result
  }

  return _isSymmetrical(root, root)
}
