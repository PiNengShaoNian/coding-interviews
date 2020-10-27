export default function generateArr<Value>(
  size: number,
  fn: (i: number) => Value
): Value[] {
  const res = []

  for (let i = 0; i < size; i++) {
    res.push(fn(i))
  }

  return res
}
