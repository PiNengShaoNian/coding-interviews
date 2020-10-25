const scanInteger = (str: string, index: number): [boolean, number] => {
  if (str[index] === '-' || str[index] === '+') {
    index++
  }
  const integerLeft = index

  while (str[index] >= '0' && str[index] <= '9') index++

  return [index - integerLeft > 0, index]
}

const scanUnsignedInteger = (str: string, index: number): [boolean, number] => {
  const integerLeft = index

  while (str[index] >= '0' && str[index] <= '9') index++

  return [index - integerLeft > 0, index]
}

export const isNumeric = (str: string): boolean => {
  if (!str) return false

  let numeric: boolean = false
  let strIndex = 0

  ;[numeric, strIndex] = scanInteger(str, strIndex)

  if (str[strIndex] === '.') {
    let isUnsignedIntegerLegal: boolean
    ;[isUnsignedIntegerLegal, strIndex] = scanUnsignedInteger(str, strIndex + 1)
    numeric = numeric || isUnsignedIntegerLegal
  }

  if (str[strIndex] === 'e' || str[strIndex] === 'E') {
    let isExponentLegal: boolean
    ;[isExponentLegal, strIndex] = scanInteger(str, strIndex + 1)
    numeric = isExponentLegal && numeric
  }

  return numeric && strIndex === str.length
}
