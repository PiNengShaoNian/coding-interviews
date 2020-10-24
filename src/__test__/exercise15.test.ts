import { numberOf1 } from '../exercise15'

test('能正确地计算出1的数量', () => {
  expect(numberOf1(9)).toBe(2)
  expect(numberOf1(997)).toBe((997).toString(2).replace(/0/g, '').length)
  expect(numberOf1(2431)).toBe((2431).toString(2).replace(/0/g, '').length)
})
