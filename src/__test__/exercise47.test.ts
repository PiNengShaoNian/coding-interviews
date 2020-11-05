import { getMaxValue, getMaxValueSolution1 } from '../exercise47'

test('getMaxValue能获得最大的礼物值', () => {
  expect(
    getMaxValue([
      [1, 10, 3, 8],
      [12, 2, 9, 6],
      [5, 7, 4, 11],
      [3, 7, 16, 5],
    ])
  ).toBe(53)

  expect(
    getMaxValueSolution1([
      [1, 10, 3, 8],
      [12, 2, 9, 6],
      [5, 7, 4, 11],
      [3, 7, 16, 5],
    ])
  ).toBe(53)
})
