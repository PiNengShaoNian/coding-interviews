import { treeDepth, isBalanced, isBalancedSolution1 } from '../exercise55'
import { buildTree } from '../util/buildTree'

test('treeDepth能正确的求出树的高度', () => {
  const tree1 = buildTree([1, 2, 4, 5, 7, 3, 6], [4, 2, 7, 5, 1, 3, 6])

  expect(treeDepth(tree1)).toBe(4)

  const tree2 = buildTree([1, 2, 3], [3, 2, 1])

  expect(treeDepth(tree2)).toBe(3)

  const tree3 = buildTree([1], [1])

  expect(treeDepth(tree3)).toBe(1)
})

test('isBalanced能正确判断一棵树是否平衡', () => {
  const tree1 = buildTree([1, 2, 4, 5, 7, 3, 6], [4, 2, 7, 5, 1, 3, 6])

  expect(isBalanced(tree1)).toBe(true)
  expect(isBalancedSolution1(tree1)).toBe(true)

  const tree2 = buildTree([1, 2, 3], [3, 2, 1])

  expect(isBalanced(tree2)).toBe(false)
  expect(isBalancedSolution1(tree2)).toBe(false)

  const tree3 = buildTree([1], [1])

  expect(isBalanced(tree3)).toBe(true)
  expect(isBalancedSolution1(tree3)).toBe(true)
})
