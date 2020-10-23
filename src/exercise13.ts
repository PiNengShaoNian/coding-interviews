const charsToSum = (str: string): number => {
  let result = 0

  for (let i = 0; i < str.length; i++) {
    result += +str[i]
  }

  return result
}

export const moveingCount = (
  threshold: number,
  rows: number,
  columns: number
): number => {
  if (threshold < 0) return 0

  let count = 1
  const stack: [number, number][] = [[0, 0]]
  const directions: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const visited: boolean[][] = Array.from({ length: rows }, () => [])
  visited[0][0] = true

  while (stack.length) {
    const [i, j] = stack.pop()!

    for (const [rowOffset, columnOffset] of directions) {
      const newRow = i + rowOffset
      const newColumn = j + columnOffset

      if (
        newRow >= 0 &&
        newRow < rows &&
        newColumn >= 0 &&
        newColumn < columns &&
        !visited[newRow][newColumn] &&
        charsToSum(newRow + '' + newColumn) <= threshold
      ) {
        visited[newRow][newColumn] = true
        count++
        stack.push([newRow, newColumn])
      }
    }
  }

  return count
}
