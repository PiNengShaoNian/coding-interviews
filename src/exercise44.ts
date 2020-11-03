const countOfIntegers = (digits: number): number => {
  if (digits === 1) return 10

  const count = Math.pow(10, digits - 1)

  return 9 * count
}

const beginNumber = (digits: number): number => {
  if (digits === 1) return 0

  return Math.pow(10, digits - 1)
}

const _digitAtIndex = (index: number, digits: number): number => {
  let number = beginNumber(digits) + Math.floor(index / digits)
  const indexFromRight = digits - (index % digits)

  for (let i = 1; i < indexFromRight; ++i) {
    number = Math.floor(number / 10)
  }

  return number % 10
}

export const digitAtIndex = (index: number): number => {
  if (index < 0) return -1

  let digits = 1

  while (true) {
    let numbers = countOfIntegers(digits)

    if (index < numbers * digits) {
      return _digitAtIndex(index, digits)
    }

    index -= digits * numbers

    digits++
  }
}
