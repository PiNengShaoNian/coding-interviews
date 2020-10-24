import { power } from '../exercise16'

test('power工作正常', () => {
  expect(power(2, 16)).toBe(2 ** 16)
  expect(power(2, 17)).toBe(2 ** 17)
  expect(power(2, -6)).toBe(2 ** -6)
  expect(power(2, -17)).toBeCloseTo(2 ** -17)
  expect(() => power(0, 0)).toThrow(/invalid/i)
})
