import TreeNode from './model/TreeNode'

export const mirrorRecursively = <Value>(
  root: TreeNode<Value> | null
): void => {
  if (!root) return

  const temp = root.left
  root.left = root.right
  root.right = temp

  mirrorRecursively(root.left)
  mirrorRecursively(root.right)
}

export const mirrorIteratively = <Value>(
  root: TreeNode<Value> | null
): void => {
  
  //DFS
  if (!root) return

  const stack: TreeNode<Value>[] = []
  stack.push(root)

  while (stack.length) {
    const node = stack.pop()!

    const temp = node.left
    node.left = node.right
    node.right = temp

    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }
}
