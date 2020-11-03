export const getMinNumber = (numbers: number[]): string => {
  const numbersStrArr: string[] = numbers.map((n) => n + '')

  numbersStrArr.sort((a, b) => {
    const ab = a + b
    const ba = b + a

    if (ab === ba) return 0
    else if (ab > ba) return 1
    else return -1
  })

  return numbersStrArr.join('')
}
