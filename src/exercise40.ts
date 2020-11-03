import MaxPQ from './util/MaxPQ'
import uniform from './util/uniform'

const exch = (arr: any[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const partition = (arr: number[], low: number, hi: number): number => {
  const randomIndex = uniform(low, hi + 1)
  exch(arr, low, randomIndex)

  let i = low
  let j = hi + 1
  const v = arr[low]

  while (true) {
    while (arr[++i] < v) if (i >= hi) break

    while (arr[--j] > v) if (j <= low) break

    if (i >= j) break

    exch(arr, i, j)
  }

  exch(arr, j, low)

  return j
}

export const getLeastNumbers = (numbers: number[], k: number): number[] => {
  let low = 0
  let hi = numbers.length - 1

  let index = partition(numbers, low, hi)

  while (index !== k) {
    if (index < k) {
      low = index + 1
      index = partition(numbers, low, hi)
    } else {
      hi = index - 1

      index = partition(numbers, low, hi)
    }
  }

  return numbers.slice(0, k)
}

export const getLeastNumbersSolution1 = (
  numbers: number[],
  k: number
): number[] => {
  if(k <= 0) return []
  const maxPQ = new MaxPQ<number>()
  for (let i = 0; i < numbers.length; i++) {
    if (maxPQ.size() < k) {
      maxPQ.insert(numbers[i])
    } else if (numbers[i] < maxPQ.max()!) {
      maxPQ.deleteMax()
      maxPQ.insert(numbers[i])
    }
  }

  const res: number[] = []

  while (maxPQ.size()) {
    res.push(maxPQ.deleteMax())
  }

  return res
}
