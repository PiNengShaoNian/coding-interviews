import {
  printFromTopToBottom,
  printLayerByLayerIteratively,
  printLayerByLayerRecursively,
  printCurved,
} from '../exercise32'
import { buildTree } from '../exercise7'

test('printFromTopToBottom正常工作', () => {
  const root = buildTree([8, 6, 5, 7, 10, 9, 11], [5, 6, 7, 8, 9, 10, 11])
  const root1 = buildTree([1], [1])
  const root2 = buildTree([1, 2, 3, 4], [4, 3, 2, 1])

  expect(printFromTopToBottom(root!)).toEqual([8, 6, 10, 5, 7, 9, 11])
  expect(printFromTopToBottom(root1!)).toEqual([1])
  expect(printFromTopToBottom(root2!)).toEqual([1, 2, 3, 4])

  expect(printLayerByLayerIteratively(root!)).toEqual([
    [8],
    [6, 10],
    [5, 7, 9, 11],
  ])
  expect(printLayerByLayerIteratively(root1!)).toEqual([[1]])
  expect(printLayerByLayerIteratively(root2!)).toEqual([[1], [2], [3], [4]])

  expect(printLayerByLayerRecursively(root!)).toEqual([
    [8],
    [6, 10],
    [5, 7, 9, 11],
  ])
  expect(printLayerByLayerRecursively(root1!)).toEqual([[1]])
  expect(printLayerByLayerRecursively(root2!)).toEqual([[1], [2], [3], [4]])
})

test('printCurved正常工作', () => {
  const root = buildTree(
    [1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15],
    [8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15]
  )
  const root1 = buildTree([8, 6, 5, 7, 10, 9, 11], [5, 6, 7, 8, 9, 10, 11])
  const root2 = buildTree([1, 2, 3, 4], [4, 3, 2, 1])
  expect(printCurved(root!)).toEqual([
    1,
    3,
    2,
    4,
    5,
    6,
    7,
    15,
    14,
    13,
    12,
    11,
    10,
    9,
    8,
  ])
  expect(printCurved(root1!)).toEqual([8, 10, 6, 5, 7, 9, 11])
  expect(printCurved(root2!)).toEqual([1, 2, 3, 4])
})
