export const printMatrixClockwiselyIteratively = (
  matrix: number[][]
): number[] => {
  const res: number[] = []

  if (!matrix.length) return res

  let rowStart = 0
  let rowEnd = matrix.length - 1

  let columnStart = 0
  let columnEnd = matrix[0].length - 1

  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    for (let i = columnStart; i <= columnEnd; i++) {
      res.push(matrix[rowStart][i])
    }
    rowStart++

    if (rowStart > rowEnd) break

    for (let i = rowStart; i <= rowEnd; i++) {
      res.push(matrix[i][columnEnd])
    }

    columnEnd--

    if (columnStart > columnEnd) break
    for (let i = columnEnd; i >= columnStart; i--) {
      res.push(matrix[rowEnd][i])
    }
    rowEnd--

    if (rowStart > rowEnd) break

    for (let i = rowEnd; i >= rowStart; i--) {
      res.push(matrix[i][columnStart])
    }
    columnStart++
  }

  return res
}

const printMatrixInCycle = (
  matrix: number[][],
  rows: number,
  columns: number,
  start: number,
  res: number[]
): void => {
  let endX = columns - 1 - start
  let endY = rows - 1 - start

  for (let i = start; i <= endX; i++) {
    res.push(matrix[start][i])
  }

  if (start >= endY) return

  for (let i = start + 1; i <= endY; i++) {
    res.push(matrix[i][endX])
  }

  if (start >= endX || start >= endY) return

  for (let i = endX - 1; i >= start; i--) {
    res.push(matrix[endY][i])
  }

  if (start >= endX || start >= endY) return

  for (let i = endY - 1; i >= start + 1; i--) {
    res.push(matrix[i][start])
  }
}

export const printMatrixClockwiselyRecursively = (
  matrix: number[][]
): number[] => {
  const res: number[] = []

  if (!matrix.length) return res

  const rows = matrix.length
  const columns = matrix[0].length

  let start = 0

  while (rows > start * 2 && columns > start * 2) {
    printMatrixInCycle(matrix, rows, columns, start, res)
    start++
  }

  return res
}
