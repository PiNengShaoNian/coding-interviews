export const maxDiff = (numbers: number[]): number => {
  let min = Infinity
  let maxProfit = -Infinity

  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i]
    }

    if (numbers[i] - min > maxProfit) maxProfit = numbers[i] - min
  }

  return maxProfit
}
