const findMinInOrder = (
  numbers: number[],
  index1: number,
  index2: number
): number => {
  let result = numbers[index1]

  for (let i = index1 + 1; i <= index2; i++) {
    if (result > numbers[i]) result = numbers[i]
  }

  return result
}

export const min = (numbers: number[]): number => {
  if (!numbers.length) return -1
  let index1: number = 0
  let index2: number = numbers.length - 1
  let midIndex = index1

  while (numbers[index2] <= numbers[index1]) {
    if (index2 - index1 === 1) {
      midIndex = index2
      break
    }

    midIndex = index1 + Math.floor((index2 - index1) / 2)

    if (
      numbers[index1] === numbers[index2] &&
      numbers[midIndex] === numbers[index1]
    ) {
      return findMinInOrder(numbers, index1, index2)
    }
    if (numbers[midIndex] <= numbers[index2]) {
      index2 = midIndex
    } else if (numbers[midIndex] >= numbers[index1]) {
      index1 = midIndex
    }
  }

  return numbers[midIndex]
}
