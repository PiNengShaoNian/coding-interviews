import TreeNode from './model/TreeNode'
import { buildTree } from './util/buildTree'

export const hasSubTree = <Value>(
  tree1: TreeNode<Value> | null,
  tree2: TreeNode<Value> | null
): boolean => {
  let result = false

  if (tree1 && tree2) {
    if (tree1.value === tree2.value) {
      result = doesTree1HasTree2(tree1, tree2)
    }

    if (!result) {
      result = hasSubTree(tree1.left, tree2)
    }

    if (!result) {
      result = hasSubTree(tree1.right, tree2)
    }
  }

  return result
}

const doesTree1HasTree2 = <Value>(
  tree1: TreeNode<Value> | null,
  tree2: TreeNode<Value> | null
): boolean => {
  if (!tree2) return true

  if (!tree1) return false

  if (tree1.value !== tree2.value) return false

  return (
    doesTree1HasTree2(tree1.left, tree2.left) &&
    doesTree1HasTree2(tree1.right, tree2.right)
  )
}
