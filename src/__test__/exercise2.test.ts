import { duplicate } from '../exercise2'

test('duplicate能正常工作', () => {
  expect(duplicate([0, 1, 2])).toBeFalsy()
  expect(duplicate([0, 1, 2, 3, 4])).toBeFalsy()
})
