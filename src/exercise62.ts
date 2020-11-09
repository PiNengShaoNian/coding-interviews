import DoublyLinkedListCircular from './util/DoublyLinkedListCircular'

export const lastRemainingSolution1 = (n: number, m: number): number => {
  const list = new DoublyLinkedListCircular<number>()
  for (let i = 0; i < n; i++) {
    list.addLast(i)
  }

  let p = 0
  while (list.size() > 1) {
    for (let i = 0; i < m - 1; i++) {
      p++
      if (p === list.size()) p = 0
    }

    list.removeAtIndex(p)

    if (p === list.size()) p = 0
  }

  return list.get(0)!
}

export const lastRemainingSolution2 = (n: number, m: number): number => {
  if (n < 1 || m < 1) return -1
  let last = 0

  for (let i = 2; i <= n; i++) {
    last = (last + m) % i
  }

  return last
}
