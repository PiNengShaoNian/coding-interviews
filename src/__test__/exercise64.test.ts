import { sumSolution1, sumSolution2 } from '../exercise64'

test('sum能正常求和', () => {
  expect(sumSolution1(100)).toBe(5050)
  expect(sumSolution2(100)).toBe(5050)
})
