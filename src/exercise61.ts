export const isContinuous = (numbers: number[]): boolean => {
  numbers.sort((a, b) => a - b)

  let numberOfZero = 0
  let numberOfGap = 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) numberOfZero++
  }

  for (let i = numberOfZero; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1]) return false

    numberOfGap += numbers[i] - numbers[i - 1] - 1
  }

  return numberOfGap <= numberOfZero
}
