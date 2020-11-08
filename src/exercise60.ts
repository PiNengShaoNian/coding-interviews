export const probability = (n: number): number[] => {
  const result: number[] = []

  if (n < 1) return result

  const maxSum = 6 * n
  const minSum = n
  for (let i = 0; i < maxSum - minSum + 1; i++) {
    result[i] = 0
  }

  const _probability = (n: number, sum: number, result: number[]): void => {
    if (n === 1) {
      result[sum - minSum]++
      return
    }

    for (let i = 1; i <= 6; i++) {
      _probability(n - 1, sum + i, result)
    }
  }

  for (let i = 1; i <= 6; i++) {
    _probability(n, i, result)
  }

  return result
}

export const probabilitySolution1 = (n: number): number[] => {
  if (n < 1) return []
  const maxValue = 6
  const result: number[][] = Array.from({ length: 2 }, () =>
    Array.from({ length: maxValue * n + 1 }, () => 0)
  )

  let flag = 0

  for (let i = 1; i <= maxValue; i++) {
    result[flag][i] = 1
  }

  for (let k = 2; k <= n; k++) {
    for (let i = k; i <= maxValue * k; i++) {
      result[1 - flag][i] = 0
      for (let j = 1; i >= j && j <= maxValue; j++) {
        result[1 - flag][i] += result[flag][i - j]
      }
    }

    flag = 1 - flag
  }

  return result[flag]
}
