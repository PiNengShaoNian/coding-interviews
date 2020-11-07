export const inversePairs = (numbers: number[]): number => {
  let count: number = 0
  const aux: number[] = []
  const countPairs = (
    numbers: number[],
    low: number,
    mid: number,
    hi: number
  ) => {
    for (let i = low; i <= hi; i++) {
      aux[i] = numbers[i]
    }

    let i = low
    let j = mid + 1

    for (let k = low; k <= hi; k++) {
      if (i > mid) {
        numbers[k] = aux[j++]
      } else if (j > hi) {
        numbers[k] = aux[i++]
      } else if (aux[i] > aux[j]) {
        count += mid - i + 1
        numbers[k] = aux[j++]
      } else numbers[k] = aux[i++]
    }
  }

  const _inversePairs = (numbers: number[], low: number, hi: number) => {
    if (low >= hi) return

    const mid = low + ((hi - low) >> 1)

    _inversePairs(numbers, low, mid)
    _inversePairs(numbers, mid + 1, hi)

    if (numbers[mid + 1] < numbers[mid]) {
      countPairs(numbers, low, mid, hi)
    }
  }

  _inversePairs(numbers, 0, numbers.length - 1)

  return count
}
