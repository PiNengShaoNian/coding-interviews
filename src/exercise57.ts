export const findNumbersWithSum = (
  data: number[],
  sum: number
): [number, number] => {
  if (data.length < 2) return [-1, -1]

  let ahead = 0
  let behind = data.length - 1

  while (ahead < behind) {
    const s = data[ahead] + data[behind]

    if (s === sum) return [data[ahead], data[behind]]
    else if (s > sum) behind--
    else ahead++
  }

  return [-1, -1]
}

export const findContinuousSequence = (sum: number): [number, number][] => {
  if (sum < 3) return []

  let result: [number, number][] = []
  let small = 1
  let big = 2
  let middle = (sum + 1) >> 1
  let curSum = small + big
  while (small < middle) {
    if (curSum === sum) result.push([small, big])

    while (small < middle && curSum > sum) {
      curSum -= small
      small++

      if (curSum === sum) result.push([small, big])
    }

    big++
    curSum += big
  }

  return result
}
