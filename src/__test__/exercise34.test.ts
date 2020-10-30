import { findPath, findPathRecursively } from '../exercise34'
import { buildTree } from '../exercise7'

test('findPath能正常工作', () => {
  const root = buildTree([10, 5, 4, 7, 12], [4, 5, 7, 10, 12])
  expect(findPath(root!, 22)).toBe(2)
  expect(findPath(root!, 5)).toBe(0)
  expect(findPath(root!, 15)).toBe(1)

  expect(findPathRecursively(root!, 22)).toEqual([10, 5, 7])
})
