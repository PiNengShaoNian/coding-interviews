import uniform from './util/uniform'

const exch = (arr: any[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const partition = (arr: number[], low: number, hi: number): number => {
  const randomIndex = uniform(low, hi + 1)
  exch(arr, randomIndex, low)

  const value = arr[low]

  let i = low
  let j = hi + 1

  while (true) {
    while (arr[++i] < value) if (i >= hi) break

    while (arr[--j] > value) if (j <= low) break

    if (i >= j) break

    exch(arr, i, j)
  }

  exch(arr, low, j)

  return j
}

export const moreThanHalfNum = (numbers: number[]): number => {
  if (!numbers.length) return -1

  let low = 0
  let hi = numbers.length - 1
  let mid = numbers.length >> 1

  let index = partition(numbers, low, hi)

  while (index !== mid) {
    if (index > mid) {
      hi = index - 1
      index = partition(numbers, low, hi)
    } else {
      low = index + 1
      index = partition(numbers, low, hi)
    }
  }

  return numbers[mid]
}

export const moreThanHalfNumSolution1 = (numbers: number[]): number => {
  if (!numbers.length) return -1
  let times = 1
  let result = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (times === 0) {
      result = numbers[i]
      times = 1
    } else if (result === numbers[i]) {
      times++
    } else {
      times--
    }
  }

  return result
}
