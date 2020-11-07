import { findNumsAppearOnce, findNumberAppearingOnce } from '../exercise56'

test('findNumsAppearOnce正常工作', () => {
  expect(findNumsAppearOnce([2, 4, 3, 6, 3, 2, 5, 5])).toEqual([6, 4])
  expect(findNumsAppearOnce([1, 2])).toEqual([1, 2])
})
test('findNumberAppearingOnce正常工作', () => {
  expect(findNumberAppearingOnce([223, 223, 223, 666, 666, 666, 3, 4, 4, 4])).toBe(3)
})
