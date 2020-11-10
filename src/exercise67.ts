export const strToInt = (string: string): number => {
  let isNegative = false
  let strIndex = 0
  let len = string.length
  let num = 0

  if (string[strIndex] === '+') strIndex++
  else if (string[strIndex] === '-') {
    strIndex++
    isNegative = true
  }

  if (strIndex >= len) return NaN

  for (let i = strIndex; i < len; i++) {
    if (string[i] < '0' || string[i] > '9') return NaN
  }

  while (strIndex < len) {
    num = num * 10 + +string[strIndex]
    strIndex++
  }

  return isNegative ? -num : num
}
