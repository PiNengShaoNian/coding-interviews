import { findNumbersWithSum, findContinuousSequence } from '../exercise57'

test('findNumbersWithSum正常工作', () => {
  expect(findNumbersWithSum([1, 2, 4, 7, 11, 15], 15)).toEqual([4, 11])
  expect(findNumbersWithSum([1, 2, 4, 7, 11, 15], 18)).toEqual([7, 11])
  expect(findNumbersWithSum([1, 2, 4, 7, 11, 15], 10)).toEqual([-1, -1])
})

test('findContinuousSequence正常工作', () => {
  expect(findContinuousSequence(15)).toEqual([
    [1, 5],
    [4, 6],
    [7, 8],
  ])
  expect(findContinuousSequence(9)).toEqual([
    [2, 4],
    [4, 5],
  ])
  expect(findContinuousSequence(4)).toEqual([])
})
