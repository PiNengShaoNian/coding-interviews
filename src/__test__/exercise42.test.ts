import { findGreatestSumOfSubArray } from '../exercise42'

test('findGreatestSumOfSubArray正常工作', () => {
  expect(findGreatestSumOfSubArray([1, 2, 3, 4])).toBe(10)

  expect(findGreatestSumOfSubArray([1, -2, 3, 10, -4, 7, 2, -5])).toBe(18)

  expect(findGreatestSumOfSubArray([-4, -3, -2, -1])).toBe(0)
})
