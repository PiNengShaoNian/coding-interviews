import { moreThanHalfNum, moreThanHalfNumSolution1 } from '../exercise39'
import uniform from '../util/uniform'

test('能正确地找到数字', () => {
  const arr = Array.from({ length: 10 * 10000 }, () => 666)

  for (let i = 0; i < 9 * 10000; i++) {
    arr.push(uniform(0, 10 * 10000))
  }

  expect(moreThanHalfNumSolution1(arr)).toBe(666)

  expect(moreThanHalfNum(arr)).toBe(666)
})
