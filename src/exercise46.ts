export const getTransitionCount = (n: string): number => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] > '9' || n[i] < '0') throw new Error('Invalid Input')
  }
  const counts: number[] = []

  if (!n.length) return 0

  counts[n.length - 1] = 1

  for (let i = n.length - 2; i >= 0; i--) {
    const hi = +n[i]
    const low = +n[i + 1]
    const combination = hi * 10 + low

    if (combination >= 0 && combination <= 25) {
      if (i === n.length - 2) counts[i] = counts[i + 1] + 1
      else counts[i] = counts[i + 1] + counts[i + 2]
    } else {
      counts[i] = counts[i + 1]
    }
  }

  return counts[0]
}

export const getTransitionCountRecursively = (n: string): number => {
  const count = (index: number): number => {
    if (index === n.length - 1) return 1

    const combination = n[index] + n[index + 1]
    return (
      count(index + 1) +
      (combination >= '10' && combination <= '25' ? 1 : 0) *
        (index <= n.length - 3 ? count(index + 2) : 1)
    )
  }

  return count(0)
}
