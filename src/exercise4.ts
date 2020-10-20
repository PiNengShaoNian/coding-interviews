export const find = (matrix: number[][], target: number): boolean => {
  if (!matrix.length) return false
  let i = 0
  let j = matrix[0].length - 1

  while (i < matrix.length && j >= 0) {
    const n = matrix[i][j]

    if (n === target) return true
    else if (n > target) {
      j--
    } else {
      i++
    }
  }

  return false
}
