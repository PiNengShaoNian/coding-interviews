import { find } from '../exercise4'

test('find能正常工作', () => {
  const matrix = [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ]

  expect(find(matrix, 7)).toBeTruthy()
  expect(find(matrix, 5)).toBeFalsy()
  expect(find(matrix, 16)).toBeFalsy()
})
