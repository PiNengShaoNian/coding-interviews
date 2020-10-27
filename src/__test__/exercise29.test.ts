import {
  printMatrixClockwiselyIteratively,
  printMatrixClockwiselyRecursively,
} from '../exercise29'

test('printMatrixClockwiselyIteratively工作正常', () => {
  const matrix1 = [
    [1, 2],
    [4, 3],
  ]

  expect(printMatrixClockwiselyIteratively(matrix1)).toEqual([1, 2, 3, 4])

  const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]

  expect(printMatrixClockwiselyIteratively(matrix2)).toEqual([
    1,
    2,
    3,
    4,
    8,
    12,
    16,
    15,
    14,
    13,
    9,
    5,
    6,
    7,
    11,
    10,
  ])

  const matrix3 = [[1, 2, 3]]

  expect(printMatrixClockwiselyIteratively(matrix3)).toEqual([1, 2, 3])

  const matrix4 = [[1], [2], [3]]

  expect(printMatrixClockwiselyIteratively(matrix4)).toEqual([1, 2, 3])
})

test('printMatrixClockwiselyRecursively工作正常', () => {
  const matrix1 = [
    [1, 2],
    [4, 3],
  ]

  expect(printMatrixClockwiselyRecursively(matrix1)).toEqual([1, 2, 3, 4])

  const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]

  expect(printMatrixClockwiselyRecursively(matrix2)).toEqual([
    1,
    2,
    3,
    4,
    8,
    12,
    16,
    15,
    14,
    13,
    9,
    5,
    6,
    7,
    11,
    10,
  ])

  const matrix3 = [[1, 2, 3]]

  expect(printMatrixClockwiselyRecursively(matrix3)).toEqual([1, 2, 3])

  const matrix4 = [[1], [2], [3]]

  expect(printMatrixClockwiselyRecursively(matrix4)).toEqual([1, 2, 3])
})
