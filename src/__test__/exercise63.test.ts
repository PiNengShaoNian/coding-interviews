import { maxDiff } from '../exercise63'

test('maxDiff能正常工作', () => {
  expect(maxDiff([9, 11, 8, 5, 7, 12, 16, 14])).toBe(11)
  expect(maxDiff([1, 2, 3, 4, 5])).toBe(4)
  expect(maxDiff([5, 4, 3, 2, 1])).toBe(0)
  expect(maxDiff([1, 1])).toBe(0)
})
