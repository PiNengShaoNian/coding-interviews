const getUglyNumber = (index: number): number => {
  const uglyNumbers: number[] = []
  let nextUglyIndex = 1
  uglyNumbers[0] = 1
  let multiply2 = 0
  let multiply3 = 0
  let multiply5 = 0

  while (nextUglyIndex < index) {
    const min = Math.min(
      uglyNumbers[multiply2] * 2,
      uglyNumbers[multiply3] * 3,
      uglyNumbers[multiply5] * 5
    )
    uglyNumbers[nextUglyIndex] = min
    while (uglyNumbers[multiply2] * 2 <= uglyNumbers[nextUglyIndex]) {
      multiply2++
    }
    while (uglyNumbers[multiply3] * 3 <= uglyNumbers[nextUglyIndex]) {
      multiply3++
    }
    while (uglyNumbers[multiply5] * 5 <= uglyNumbers[nextUglyIndex]) {
      multiply5++
    }

    nextUglyIndex++
  }

  return uglyNumbers[nextUglyIndex - 1]
}
