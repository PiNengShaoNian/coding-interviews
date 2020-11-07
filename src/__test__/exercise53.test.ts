import {
  getNumberOfK,
  getMissingNumber,
  getNumberSameAsIndex,
} from '../exercise53'

test('getNumberSameAsIndex正常工作', () => {
  expect(getNumberSameAsIndex([-3, -1, 1, 3, 5])).toBe(3)
  expect(getNumberSameAsIndex([1, 2, 3, 4])).toBe(-1)
  expect(getNumberSameAsIndex([0, 3, 6, 7])).toBe(0)
  expect(getNumberSameAsIndex([-1, 0, 1, 2, 4])).toBe(4)
})

test('getMissingNumber能正确的找到缺失的数字', () => {
  expect(getMissingNumber([0, 1, 2, 3, 4, 6, 7, 8])).toBe(5)
  expect(getMissingNumber([1, 2, 3, 4, 6, 7, 8])).toBe(0)
  expect(getMissingNumber([0, 1, 2, 3, 4])).toBe(5)
  expect(getMissingNumber([0])).toBe(1)
})

test('getNumberOfK正常工作', () => {
  expect(getNumberOfK([1, 2, 3, 3, 3, 4, 5], 3)).toBe(3)
  expect(getNumberOfK([1, 2, 3], 3)).toBe(1)
  expect(getNumberOfK([1, 2, 3], 1)).toBe(1)
  expect(getNumberOfK([1, 2, 3], 6)).toBe(0)
})
