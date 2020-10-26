import { hasSubTree } from '../exercise26'
import TreeNode from '../model/TreeNode'

test('hasSubTree工作正常', () => {
  const root1 = new TreeNode(8)
  root1.left = new TreeNode(8)
  root1.right = new TreeNode(7)
  root1.left.left = new TreeNode(9)
  root1.left.right = new TreeNode(2)
  root1.left.right.left = new TreeNode(4)
  root1.left.right.right = new TreeNode(7)

  const root2 = new TreeNode(8)
  root2.left = new TreeNode(9)
  root2.right = new TreeNode(2)

  const root3 = new TreeNode(8)
  root3.left = new TreeNode(9)
  root3.right = new TreeNode(10)

  const root4 = new TreeNode(1)
  root4.right = new TreeNode(2)
  root4.right.right = new TreeNode(3)
  root4.right.right.right = new TreeNode(4)
  root4.right.right.right.right = new TreeNode(5)

  const root5 = new TreeNode(3)
  root5.right = new TreeNode(4)

  const root6 = new TreeNode(5)
  root6.right = new TreeNode(6)

  expect(hasSubTree(root1, root2)).toBeTruthy()
  expect(hasSubTree(root1, root3)).toBeFalsy()
  expect(hasSubTree(null, root3)).toBeFalsy()
  expect(hasSubTree(root1, null)).toBeFalsy()

  expect(hasSubTree(root4, root5)).toBeTruthy()
  expect(hasSubTree(root4, root6)).toBeFalsy()
})
