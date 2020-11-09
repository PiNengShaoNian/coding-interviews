export const add = (number1: number, number2: number): number => {
  let sum
  let carry

  do {
    sum = number1 ^ number2
    carry = (number1 & number2) << 1

    number1 = sum
    number2 = carry
  } while (number2 !== 0)

  return number1
}
