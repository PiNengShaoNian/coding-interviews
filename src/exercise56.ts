export const findNumsAppearOnce = (data: number[]): [number, number] => {
  if (data.length < 2) return [-1, -1]
  let resultExclusiveOr = 0

  for (let i = 0; i < data.length; i++) {
    resultExclusiveOr ^= data[i]
  }

  let num1 = 0
  let num2 = 0
  const indexOf1 = findFirstBitIs1(resultExclusiveOr)
  for (let i = 0; i < data.length; i++) {
    if (isBit1(data[i], indexOf1)) {
      num1 ^= data[i]
    } else num2 ^= data[i]
  }

  return [num1, num2]
}

const findFirstBitIs1 = (number: number): number => {
  let indexBit = 0
  while ((number & 1) === 0) {
    number >>= 1
    indexBit++
  }

  return indexBit
}

const isBit1 = (number: number, indexBit: number): boolean => {
  number >>= indexBit

  return (number & 1) === 1
}

export const findNumberAppearingOnce = (numbers: number[]): number => {
  const bitSum: number[] = Array.from({ length: 53 }, () => 0)

  for (let i = 0; i < numbers.length; i++) {
    let bitMask = 1
    for (let j = 52; j >= 0; j--) {
      const bit = numbers[i] & bitMask
      if (bit !== 0) {
        bitSum[j] += 1
      }
      bitMask <<= 1
    }
  }

  let result = 0b0
  for (let i = 0; i <= 52; i++) {
    result <<= 1
    result += bitSum[i] % 3
  }

  return result
}

findNumberAppearingOnce([1, 1, 1, 2, 2, 2, 3, 4, 4, 4])
