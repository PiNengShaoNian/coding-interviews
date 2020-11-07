const getFirstK = (
  arr: number[],
  k: number,
  low: number,
  hi: number
): number => {
  if (low > hi) return -1
  const mid = low + ((hi - low) >> 1)

  if (arr[mid] > k) {
    return getFirstK(arr, k, low, mid - 1)
  } else if (arr[mid] < k) {
    return getFirstK(arr, k, mid + 1, hi)
  } else {
    if (arr[mid] === arr[mid - 1]) {
      return getFirstK(arr, k, low, mid - 1)
    } else return mid
  }
}

const getLastK = (
  arr: number[],
  k: number,
  low: number,
  hi: number
): number => {
  if (low > hi) return -1
  const mid = low + ((hi - low) >> 1)

  if (arr[mid] > k) {
    return getLastK(arr, k, low, mid - 1)
  } else if (arr[mid] < k) {
    return getLastK(arr, k, mid + 1, hi)
  } else {
    if (arr[mid] === arr[mid + 1]) {
      return getLastK(arr, k, mid + 1, hi)
    } else return mid
  }
}

export const getNumberOfK = (arr: number[], k: number): number => {
  let result = 0

  const firstK = getFirstK(arr, k, 0, arr.length - 1)
  const lastK = getLastK(arr, k, 0, arr.length - 1)

  if (firstK !== -1 && lastK !== -1) result = lastK - firstK + 1

  return result
}

export const getMissingNumber = (numbers: number[]): number => {
  const _getMissingNumber = (
    numbers: number[],
    low: number,
    hi: number
  ): number => {
    if (low > hi) return -1

    const mid = low + ((hi - low) >> 1)

    if (numbers[mid] === mid) {
      if (mid === numbers.length - 1) return mid + 1
      return _getMissingNumber(numbers, mid + 1, hi)
    } else {
      if (numbers[mid - 1] === mid - 1 || mid === 0) return mid
      else return _getMissingNumber(numbers, low, mid - 1)
    }
  }

  return _getMissingNumber(numbers, 0, numbers.length - 1)
}

export const getNumberSameAsIndex = (numbers: number[]): number => {
  const _getNumberSameAsIndex = (
    numbers: number[],
    low: number,
    hi: number
  ): number => {
    if (low > hi) return -1

    const mid = low + ((hi - low) >> 1)

    if (mid < numbers[mid]) {
      return _getNumberSameAsIndex(numbers, low, mid - 1)
    } else if (mid > numbers[mid]) {
      return _getNumberSameAsIndex(numbers, mid + 1, hi)
    } else return mid
  }

  return _getNumberSameAsIndex(numbers, 0, numbers.length - 1)
}
