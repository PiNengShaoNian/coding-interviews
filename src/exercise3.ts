export const duplicate = (numbers: number[]): boolean => {
  if (!numbers.length) return false

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 || numbers[i] >= numbers.length) {
      return false
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    while (i !== numbers[i]) {
      const m = numbers[i]

      if (numbers[m] === m) return true
      const temp = numbers[m]
      numbers[i] = temp
      numbers[m] = m
    }
  }

  return false
}

export const getDuplication = (numbers: number[]): number => {
  // [1,2,3,4, 5, 5]

  if (!numbers.length) return -1

  let low = 1
  let hi = numbers.length - 1

  const countRange = (start: number, end: number): number => {
    let count: number = 0

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= start && numbers[i] <= end) count++
    }

    return count
  }

  while (low <= hi) {
    let mid = low + Math.floor((hi - low) / 2)

    const count = countRange(low, mid)
    if (low === hi) {
      if (count > 1) return low
      else break
    }
    const leftHasDeplication = count > mid - low + 1

    if (leftHasDeplication) {
      hi = mid
    } else {
      low = mid + 1
    }
  }

  return -1
}
