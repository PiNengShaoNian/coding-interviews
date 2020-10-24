export const numberOf1 = (m: number): number => {
  let count = 0

  while (m) {
    count++
    m = (m - 1) & m
  }

  return count
}
