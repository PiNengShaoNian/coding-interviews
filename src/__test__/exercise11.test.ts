import { min } from '../exercise11'

test('能正确地找出翻转数组的最小值', () => {
  expect(min([3, 4, 5, 1, 2, 2])).toBe(1)

  expect(min([1, 1, 1, 0, 1])).toBe(0)

  expect(min([1, 2, 3, 4, 5])).toBe(1)

  expect(min([1])).toBe(1)
})
