import {
  getLastCommonParent,
  TreeNode,
  getLastCommonParentSolution1,
  getLastCommonParentInBST,
} from '../exercise68'
import { buildTree } from '../util/buildTree'
import { default as BSTNode } from '../model/TreeNode'

test('getLastCommonParent正常工作', () => {
  const nodeF = new TreeNode('F')
  const nodeH = new TreeNode('H')
  const nodeE = new TreeNode('E', [nodeH, new TreeNode('I'), new TreeNode('J')])

  const root = new TreeNode<string>('A', [
    new TreeNode('B', [new TreeNode('D', [nodeF, new TreeNode('G')]), nodeE]),
    new TreeNode('C'),
  ])

  expect(getLastCommonParent(root, nodeF, nodeH)!.value).toBe('B')
  expect(getLastCommonParent(root, nodeF, nodeE)!.value).toBe('B')
  expect(getLastCommonParent(root, nodeH, nodeE)!.value).toBe('B')

  expect(getLastCommonParentSolution1(root, nodeF, nodeH)!.value).toBe('B')
  expect(getLastCommonParentSolution1(root, nodeF, nodeE)!.value).toBe('B')
  expect(getLastCommonParentSolution1(root, nodeH, nodeE)!.value).toBe('B')
})

test('getLastCommonParentInBST正常工作', () => {
  const bst1 = buildTree(
    [5, 3, 1, 0, 2, 4, 7, 6, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  )!

  expect(bst1?.value).toBe(5)

  expect(
    getLastCommonParentInBST(bst1, new BSTNode(4), new BSTNode(0))?.value
  ).toBe(3)
  expect(
    getLastCommonParentInBST(bst1, new BSTNode(0), new BSTNode(1))?.value
  ).toBe(3)
  expect(
    getLastCommonParentInBST(bst1, new BSTNode(4), new BSTNode(6))?.value
  ).toBe(5)
})
