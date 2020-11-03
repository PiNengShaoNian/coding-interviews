//https://leetcode-cn.com/problems/number-of-digit-one/

function countDigitOne(n: number): number {
  if (n <= 0) return 0
  const str = n + ''
  const numberOfOne = (strIndex: number): number => {
    if (strIndex > str.length) return 0

    if (strIndex === str.length - 1) {
      if (str[strIndex] >= '1') return 1
      else return 0
    }

    let numFirstDigit = 0
    const digit = +str[strIndex]

    if (digit > 1) {
      numFirstDigit = Math.pow(10, str.length - strIndex - 1)
    } else if (digit === 1) {
      numFirstDigit = (n % Math.pow(10, str.length - strIndex - 1)) + 1
    }
    const numOfOtherDigits =
      digit * (str.length - strIndex - 1) * 10 ** (str.length - strIndex - 2)

    const numRecursive = numberOfOne(strIndex + 1)

    return numFirstDigit + numOfOtherDigits + numRecursive
  }

  return numberOfOne(0)
}
