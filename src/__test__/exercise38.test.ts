import { combination, permutation } from '../exercise38'

const factorial = (i: number): number => {
  let res = 1
  while (i > 0) {
    res *= i
    i--
  }

  return res
}

const C = (n: number, m: number): number => {
  return factorial(n) / (factorial(m) * factorial(n - m))
}

const getCombinationCount = (n: number): number => {
  let res = 0

  for (let i = 1; i <= n; i++) {
    res += C(n, i)
  }

  return res
}

test('permutation能正确的计算出组合', () => {
  expect(permutation('abc').length).toEqual(factorial(3))
  expect(permutation('abcd').length).toEqual(factorial(4))
  expect(permutation('abcde').length).toEqual(factorial(5))
  expect(permutation('abcdef').length).toEqual(factorial(6))

  expect(combination('abc').size).toBe(getCombinationCount(3))
  expect(combination('abcd').size).toBe(getCombinationCount(4))
  expect(combination('abcde').size).toBe(getCombinationCount(5))
  expect(combination('abcdef').size).toBe(getCombinationCount(6))
})
