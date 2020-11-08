import { maxInWindows, QueueWithMax } from '../exercise59'
import generateArr from '../util/generateArr'

test('maxInWindows正常工作', () => {
  expect(maxInWindows([2, 3, 4, 2, 6, 2, 5, 1], 3)).toEqual([4, 4, 6, 6, 6, 5])
  expect(maxInWindows([2, 3, 4, 2, 6, 2, 5, 1], 4)).toEqual([4, 6, 6, 6, 6])
})

describe('QueueWithMax测试', () => {
  test('enqueue方法正常工作', () => {
    const testArr = generateArr(1000, (i) => i)
    const queue = new QueueWithMax<number>()

    for (let i = 0; i < testArr.length; i++) {
      queue.enqueue(testArr[i])
      expect(queue.front()).toBe(0)
    }

    expect(queue.size()).toBe(1000)
  })

  test('dequeue方法正常工作', () => {
    const testArr = generateArr(1000, (i) => i)
    const queue = new QueueWithMax<number>()

    for (let i = 0; i < testArr.length; i++) {
      queue.enqueue(testArr[i])
    }

    while (!queue.isEmpty()) {
      const front = queue.front()
      expect(queue.dequeue()).toBe(front)
    }

    expect(queue.size()).toBe(0)
  })

  test('max方法正常工作', () => {
    const testArr = generateArr(1000, (i) => i)
    const queue = new QueueWithMax<number>()

    for (let i = 0; i < testArr.length; i++) {
      queue.enqueue(testArr[i])
    }

    while (!queue.isEmpty()) {
      const front = queue.front()
      expect(queue.max()).toBe(999)
      expect(queue.dequeue()).toBe(front)
    }

    expect(queue.size()).toBe(0)

    for (let i = testArr.length - 1; i >= 0; i--) {
      queue.enqueue(testArr[i])
    }

    expect(queue.size()).toBe(testArr.length)

    while (!queue.isEmpty()) {
      const front = queue.front()
      expect(queue.max()).toBe(front)
      expect(queue.dequeue()).toBe(front)
    }
  })
})
