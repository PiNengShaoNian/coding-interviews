import {
  maxProductAfterCutting,
  maxProductAfterCuttingSolution2,
} from '../exercise14'

test('maxProductAfterCutting能得出正确值', () => {
  expect(maxProductAfterCutting(8)).toBe(18)
  expect(maxProductAfterCuttingSolution2(8)).toBe(18)
})
