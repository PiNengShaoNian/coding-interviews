import { lastRemainingSolution1, lastRemainingSolution2 } from '../exercise62'

test('lastRemainingSolution1正常工作', () => {
  expect(lastRemainingSolution1(5, 3)).toBe(3)
  expect(lastRemainingSolution2(5, 3)).toBe(3)
})
