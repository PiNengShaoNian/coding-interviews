import { strToInt } from '../exercise67'

test('strToInt正常工作', () => {
  expect(strToInt('666')).toBe(666)
  expect(strToInt('+666')).toBe(666)
  expect(strToInt('-666')).toBe(-666)
  expect(strToInt('')).toBeNaN()
  expect(strToInt('-')).toBeNaN()
  expect(strToInt('123a')).toBeNaN()
})
