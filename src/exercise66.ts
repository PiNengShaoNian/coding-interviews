const multiply = (arr: number[]): number[] => {
  if (arr.length < 2) return []

  let result: number[] = []
  result[0] = 1
  for (let i = 1; i < arr.length; i++) {
    result[i] = result[i - 1] * arr[i - 1]
  }

  let d = 1

  for (let i = arr.length - 2; i >= 0; i--) {
    d *= arr[i + 1]

    result[i] = d * result[i]
  }

  return result
}
