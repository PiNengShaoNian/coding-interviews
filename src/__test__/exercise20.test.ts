import { isNumeric } from '../exercise20'

test('能正确的检验数字', () => {
  expect(isNumeric('')).toBeFalsy()

  expect(isNumeric('+100')).toBeTruthy()

  expect(isNumeric('5e2')).toBeTruthy()

  expect(isNumeric('-123')).toBeTruthy()

  expect(isNumeric('3.14159')).toBeTruthy()

  expect(isNumeric('-1E-16')).toBeTruthy()
  expect(isNumeric('.123')).toBeTruthy()

  expect(isNumeric('12e')).toBeFalsy()
  expect(isNumeric('1a3.14')).toBeFalsy()
  expect(isNumeric('1.2.3')).toBeFalsy()
  expect(isNumeric('+-5')).toBeFalsy()
  expect(isNumeric('125+5.4')).toBeFalsy()
})
