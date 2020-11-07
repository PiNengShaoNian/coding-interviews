import { kThNode } from '../exercise54'
import { buildTree } from '../util/buildTree'

test('kThNode能正确的找到节点', () => {
  const tree = buildTree([5, 3, 2, 4, 7, 6, 8], [2, 3, 4, 5, 6, 7, 8])!

  expect(tree?.value).toBe(5)

  expect(kThNode(tree, 3)?.value).toBe(4)
  expect(kThNode(tree, 0)).toBeNull()
  expect(kThNode(tree, 8)).toBeNull()
})
