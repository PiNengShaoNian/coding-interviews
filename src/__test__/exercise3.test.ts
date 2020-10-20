import { duplicate, getDuplication } from '../exercise3'

test('duplicate能正常工作', () => {
  expect(duplicate([0, 1, 2])).toBeFalsy()
  expect(duplicate([0, 1, 2, 3, 4])).toBeFalsy()

  expect(duplicate([])).toBeFalsy()

  expect(duplicate([0, 1, 3, 5])).toBeFalsy()

  expect(duplicate([0, 1, 1, 2])).toBeTruthy()

  expect(duplicate([1, 1, 0])).toBeTruthy()

  expect([3, 3, 3, 3]).toBeTruthy()
})

test('getDeplication工作正常', () => {
  expect(getDuplication([2, 3, 5, 4, 3, 2, 6, 7])).toBe(3)

  expect(getDuplication([10, 9, 8, 7, 6, 3, 2, 1, 8, 8, 8, 8])).toBe(8)
})
