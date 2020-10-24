const increment = (number: string[]): boolean => {
  let isOverflow = false

  let nTakeOver = 0
  let nLength = number.length

  for (let i = nLength - 1; i >= 0; i--) {
    let nSum = +number[i] + nTakeOver

    if (i === nLength - 1) {
      nSum += 1
    }

    if (nSum >= 10) {
      if (i === 0) {
        isOverflow = true
      } else {
        nSum -= 10
        nTakeOver = 1
        number[i] = '' + nSum
      }
    } else {
      number[i] = '' + nSum
      break
    }
  }

  return isOverflow
}

const printNumber = (number: string[]): void => {
  let isBeginning0 = true
  let str = ''
  for (let i = 0; i < number.length; i++) {
    if (isBeginning0 && number[i] !== '0') isBeginning0 = false

    if (!isBeginning0) str += number[i]
  }

  console.log(str)
}

const print1ToMaxOfNDigits = (n: number) => {
  if (n <= 0) return

  const number: string[] = Array.from({ length: n }, () => '0')

  while (!increment(number)) {
    printNumber(number)
  }
}

// print1ToMaxOfNDigits(32)

const print1ToMaxOfNDigitsSolution2 = (n: number): void => {
  if (n < 0) return

  const number: string[] = Array.from({ length: n }, () => '0')

  for (let i = 0; i < 10; i++) {
    number[0] = i + ''
    print1ToMaxOfNDigitsRecursively(number, n, 0)
  }
}

const print1ToMaxOfNDigitsRecursively = (
  number: string[],
  length: number,
  index: number
): void => {
  if (index === length - 1) {
    printNumber(number)
    return
  }

  for (let i = 0; i < 10; i++) {
    number[index + 1] = i + ''
    print1ToMaxOfNDigitsRecursively(number, length, index + 1)
  }
}

export const bigIntSum = (number1: string, number2: string): string => {
  const length = Math.max(number1.length, number2.length)

  const numberArr1: string[] = []
  const numberArr2: string[] = []

  let number1Index = number1.length - 1
  let number2Index = number2.length - 1

  for (let i = length - 1; i >= 0; i--) {
    if (number1Index >= 0) numberArr1[i] = number1[number1Index--]
    else numberArr1[i] = '0'
    if (number2Index >= 0) numberArr2[i] = number2[number2Index--]
    else numberArr2[i] = '0'
  }

  const result: string[] = Array.from({ length: length }, () => '0')
  let nTakeOver = 0
  for (let i = length - 1; i >= 0; i--) {
    let nSum: number = +numberArr2[i] + +numberArr1[i] + nTakeOver

    if (nSum >= 10) {
      nSum -= 10
      result[i] = nSum + ''
      nTakeOver = 1
    } else {
      nTakeOver = 0
      result[i] = nSum + ''
    }
  }

  return nTakeOver === 1 ? 1 + result.join('') : result.join('')
}
