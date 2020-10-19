export const duplicate = (numbers: number[]): boolean => {
  if (!numbers.length) return false

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 || numbers[i] >= numbers.length) {
      return false
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    while (i !== numbers[i]) {
      const m = numbers[i]

      if (numbers[m] === m) return true
      const temp = numbers[m]
      numbers[i] = temp
      numbers[m] = m
    }
  }

  return false
}
