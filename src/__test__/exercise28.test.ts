import { isSymmetrical } from '../exercise28'
import TreeNode from '../model/TreeNode'

test('isSymmetrical工作正常', () => {
  const root1 = new TreeNode(8)
  root1.left = new TreeNode(6)
  root1.right = new TreeNode(6)
  root1.left.left = new TreeNode(5)
  root1.left.right = new TreeNode(7)
  root1.right.left = new TreeNode(7)
  root1.right.right = new TreeNode(5)

  const root2 = new TreeNode(1)
  root2.left = new TreeNode(2)

  const root3 = new TreeNode(8)
  root3.left = new TreeNode(6)
  root3.right = new TreeNode(9)
  root3.left.left = new TreeNode(5)
  root3.left.right = new TreeNode(7)
  root3.right.left = new TreeNode(7)
  root3.right.right = new TreeNode(5)

  const root4 = new TreeNode(7)
  root4.left = new TreeNode(7)
  root4.right = new TreeNode(7)
  root4.left.left = new TreeNode(7)
  root4.left.right = new TreeNode(7)
  root4.right.left = new TreeNode(7)

  const root5 = new TreeNode(6)

  expect(isSymmetrical(root1)).toBeTruthy()

  expect(isSymmetrical(root2)).toBeFalsy()

  expect(isSymmetrical(root3)).toBeFalsy()

  expect(isSymmetrical(root4)).toBeFalsy()

  expect(isSymmetrical(root5)).toBeTruthy()
})
