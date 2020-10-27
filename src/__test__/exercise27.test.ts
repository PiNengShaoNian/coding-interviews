import { mirrorRecursively, mirrorIteratively } from '../exercise27'
import TreeNode from '../model/TreeNode'

test('mirrorRecursively正常工作', () => {
  const root1 = new TreeNode(8)
  root1.left = new TreeNode(6)
  root1.right = new TreeNode(10)
  root1.left.left = new TreeNode(5)
  root1.left.right = new TreeNode(7)
  root1.right.left = new TreeNode(9)
  root1.right.right = new TreeNode(11)

  const root1Mirror = new TreeNode(8)
  root1Mirror.left = new TreeNode(10)
  root1Mirror.right = new TreeNode(6)
  root1Mirror.left.left = new TreeNode(11)
  root1Mirror.left.right = new TreeNode(9)
  root1Mirror.right.left = new TreeNode(7)
  root1Mirror.right.right = new TreeNode(5)

  const root2 = new TreeNode(1)
  root2.left = new TreeNode(2)
  root2.left.left = new TreeNode(3)

  const root2Mirror = new TreeNode(1)
  root2Mirror.right = new TreeNode(2)
  root2Mirror.right.right = new TreeNode(3)

  expect(root1).not.toEqual(root1Mirror)

  mirrorRecursively(root1)

  expect(root1).toEqual(root1Mirror)

  expect(root2).not.toEqual(root2Mirror)

  mirrorRecursively(root2)

  expect(root2).toEqual(root2Mirror)
})

test('mirrorIteratively正常工作', () => {
  const root1 = new TreeNode(8)
  root1.left = new TreeNode(6)
  root1.right = new TreeNode(10)
  root1.left.left = new TreeNode(5)
  root1.left.right = new TreeNode(7)
  root1.right.left = new TreeNode(9)
  root1.right.right = new TreeNode(11)

  const root1Mirror = new TreeNode(8)
  root1Mirror.left = new TreeNode(10)
  root1Mirror.right = new TreeNode(6)
  root1Mirror.left.left = new TreeNode(11)
  root1Mirror.left.right = new TreeNode(9)
  root1Mirror.right.left = new TreeNode(7)
  root1Mirror.right.right = new TreeNode(5)

  expect(root1).not.toEqual(root1Mirror)

  mirrorIteratively(root1)

  expect(root1).toEqual(root1Mirror)

  const root2 = new TreeNode(1)
  root2.left = new TreeNode(2)
  root2.left.left = new TreeNode(3)

  const root2Mirror = new TreeNode(1)
  root2Mirror.right = new TreeNode(2)
  root2Mirror.right.right = new TreeNode(3)

  expect(root2).not.toEqual(root2Mirror)

  mirrorRecursively(root2)

  expect(root2).toEqual(root2Mirror)
})
