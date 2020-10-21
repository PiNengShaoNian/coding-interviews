export const fibonacci = (n: number): number => {
  const result: number[] = [0, 1]

  if (n < 2) return result[n]

  let fibNMinusOne = 1
  let fibNMniusTwo = 0
  let fibN = 0

  for (let i = 2; i <= n; i++) {
    fibN = fibNMinusOne + fibNMniusTwo

    fibNMniusTwo = fibNMinusOne
    fibNMinusOne = fibN
  }

  return fibN
}
