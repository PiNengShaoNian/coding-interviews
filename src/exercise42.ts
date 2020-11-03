export const findGreatestSumOfSubArray = (arr: number[]): number => {
  let sum = 0
  let maxSum = -Infinity

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]

    if (sum < arr[i]) {
      sum = 0
      maxSum = 0
      i--
      continue
    }

    if (sum > maxSum) {
      maxSum = sum
    }
  }

  return maxSum
}
