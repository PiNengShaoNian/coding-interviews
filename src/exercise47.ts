export const getMaxValue = (values: number[][]): number => {
  if (!values.length) return -1

  const rows = values.length
  const columns = values[0].length
  const gifts: number[][] = Array.from({ length: rows }, () => [])

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const valueFromTop = gifts[i - 1]?.[j] ?? -Infinity
      const valueFromLeft = gifts[i]?.[j - 1] ?? -Infinity

      gifts[i][j] = Math.max(valueFromLeft, valueFromTop, 0) + values[i][j]
    }
  }

  return gifts[rows - 1][columns - 1]
}

export const getMaxValueSolution1 = (values: number[][]): number => {
  if (!values.length) return -1

  const rows = values.length
  const columns = values[0].length
  const gifts: number[] = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const valueFromTop = gifts[j] ?? -Infinity
      const valueFromLeft = gifts[j - 1] ?? -Infinity

      gifts[j] = Math.max(valueFromLeft, valueFromTop, 0) + values[i][j]
    }
  }

  return gifts[columns - 1]
}

getMaxValueSolution1([
  [1, 10, 3, 8],
  [12, 2, 9, 6],
  [5, 7, 4, 11],
  [3, 7, 16, 5],
])
