class Temp {
  private static N = 0
  private static sum = 0
  constructor() {
    Temp.N++
    Temp.sum += Temp.N
  }

  static getSum() {
    return this.sum
  }
}

export const sumSolution1 = (n: number) => {
  Array.from({ length: n }, () => new Temp())

  return Temp.getSum()
}

export const sumSolution2 = (n: number): number => {
  if (n <= 0) return 0
  const funcs: Record<number, (n: number) => number> = {
    0: () => 0,
    1: function sum(n) {
      return n + this[n - 1 === 0 ? 0 : 1](n - 1)
    },
  }

  return funcs[1](n)
}
