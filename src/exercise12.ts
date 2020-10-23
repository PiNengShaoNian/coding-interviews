export const hasPath = (matrix: string[][], str: string): boolean => {
  if (!matrix.length) return false
  if (!str) return true

  const rows = matrix.length
  const columns = matrix[0].length
  let visited: boolean[][]
  const strLength = str.length
  const directions: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]

  const findPath = (
    digit: number,
    str: string,
    matrix: string[][],
    i: number,
    j: number
  ): boolean => {
    if (str[digit] !== matrix[i][j]) return false

    if (digit === strLength - 1) return true

    for (const [rowOffset, columnOffset] of directions) {
      const newRow = i + rowOffset
      const newColumn = j + columnOffset

      if (
        newRow >= 0 &&
        newRow < rows &&
        newColumn >= 0 &&
        newColumn < columns &&
        !visited[newRow][newColumn]
      ) {
        visited[newRow][newColumn] = true

        if (findPath(digit + 1, str, matrix, newRow, newColumn)) return true
      }
    }

    return false
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      visited = Array.from({ length: rows }, () => [])
      visited[i][j] = true

      if (findPath(0, str, matrix, i, j)) return true
    }
  }

  return false
}

hasPath(
  [
    ['a', 'b', 't', 'g'],
    ['c', 'f', 'c', 's'],
    ['j', 'd', 'e', 'h'],
  ],
  'bfce'
)
