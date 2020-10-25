export const reorderOddEven = (arr: number[]): number[] => {
  if (arr.length < 2) return arr

  let index1: number = 0
  let index2: number = arr.length - 1

  while (index1 < index2) {
    while (arr[index1] % 2 !== 0) index1++

    while (arr[index2] % 2 !== 1) index2--

    if (index1 >= index2) break

    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }

  return arr
}
