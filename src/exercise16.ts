const powerWithExponent = (base: number, exponent: number): number => {
  if (exponent === 0) return 1
  if (exponent === 1) return base

  let result = powerWithExponent(base, exponent >> 1)

  result *= result
  if ((exponent & 0x1) === 1) {
    result *= base
  }

  return result
}

export const power = (base: number, exponent: number): number => {
  if (base === 0 && exponent === 0) {
    throw Error('Invalid input')
  }

  let result = powerWithExponent(base, Math.abs(exponent))

  if (exponent < 0) result = 1 / result

  return result
}

power(2, 17)
