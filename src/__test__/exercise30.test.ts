import { exec } from 'child_process'
import { StackWithMin } from '../exercise30'
import generateArr from '../util/generateArr'

describe('ArrayStack测试', () => {
  test('push方法测试', () => {
    const stack = new StackWithMin()

    const testArr: number[] = generateArr(100, (i) => i)

    for (let i = 0; i < testArr.length; i++) {
      stack.push(testArr[i])
    }

    expect(stack.size()).toBe(100)
  })

  test('pop方法测试', () => {
    const stack = new StackWithMin()

    const testArr: number[] = generateArr(100, (i) => i)

    for (let i = 0; i < testArr.length; i++) {
      stack.push(testArr[i])
    }

    expect(stack.size()).toBe(100)

    while (stack.size()) {
      expect(stack.peek()).toBe(stack.size() - 1)
      stack.pop()
    }
  })

  test('min方法工作正常', () => {
    const stack = new StackWithMin()

    stack.push(3)
    expect(stack.min()).toBe(3)
    stack.push(4)
    expect(stack.min()).toBe(3)
    stack.push(2)
    expect(stack.min()).toBe(2)
    stack.push(1)
    expect(stack.min()).toBe(1)

    stack.pop()
    expect(stack.min()).toBe(2)
    stack.pop()
    expect(stack.min()).toBe(3)

    stack.push(0)

    expect(stack.min()).toBe(0)
  })
})
