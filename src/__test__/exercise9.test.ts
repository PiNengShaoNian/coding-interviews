import StackQueue from '../exercise9'

const generateArr = <Value>(
  size: number,
  fn: (i: number) => Value
): Value[] => {
  const res = []

  for (let i = 0; i < size; i++) {
    res.push(fn(i))
  }

  return res
}

describe('LoopQueue测试', () => {
  test('enqueue方法正常工作', () => {
    const testArr = generateArr(1000, (i) => i)
    const queue = new StackQueue<number>()

    for (let i = 0; i < testArr.length; i++) {
      queue.enqueue(testArr[i])
      expect(queue.front()).toBe(0)
    }

    expect(queue.size()).toBe(1000)
  })

  test('dequeue方法正常工作', () => {
    const testArr = generateArr(1000, (i) => i)
    const queue = new StackQueue<number>()

    for (let i = 0; i < testArr.length; i++) {
      queue.enqueue(testArr[i])
    }

    while (!queue.isEmpty()) {
      const front = queue.front()
      expect(queue.dequeue()).toBe(front)
    }

    expect(queue.size()).toBe(0)
  })
})
