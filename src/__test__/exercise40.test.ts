import { getLeastNumbers, getLeastNumbersSolution1 } from '../exercise40'

const sum = (arr: number[]) => {
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    res += arr[i]
  }

  return res
}

test('getLeastNumbers能求出最小的k个数', () => {
  expect(sum(getLeastNumbers([4, 5, 1, 6, 2, 7, 3, 8], 4))).toBe(10)
  expect(sum(getLeastNumbers([1, 1, 1, 1, 1], 4))).toBe(4)

  expect(sum(getLeastNumbersSolution1([4, 5, 1, 6, 2, 7, 3, 8], 4))).toBe(10)
  expect(sum(getLeastNumbersSolution1([1, 1, 1, 1, 1], 4))).toBe(4)
})
