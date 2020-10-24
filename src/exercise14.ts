export const maxProductAfterCutting = (length: number): number => {
  if (length < 2) return 0
  if (length === 2) return 1
  if (length === 3) return 2

  let max = 0
  const products: number[] = [0, 1, 2, 3]

  for (let i = 4; i <= length; i++) {
    max = 0
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      const product = products[j] * products[i - j]

      if (product > max) {
        max = product
      }
    }
    products[i] = max
  }

  return products[length]
}

export const maxProductAfterCuttingSolution2 = (length: number): number => {
  if (length < 2) return 0
  if (length === 2) return 1
  if (length === 3) return 2

  let timesOf3 = Math.floor(length / 3)

  if (length - timesOf3 === 1) {
    timesOf3 -= 1
  }

  const timesOf2 = Math.floor((length - timesOf3 * 3) / 2)

  return Math.pow(3, timesOf3) * Math.pow(2, timesOf2)
}
