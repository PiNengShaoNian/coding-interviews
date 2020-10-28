import ArrayStack from './util/ArrayStack'

export const isPopOrder = (putOrder: number[], popOrder: number[]): boolean => {
  if (putOrder.length !== popOrder.length) return false

  let putIndex = 0
  let popIndex = 0
  const stack = new ArrayStack<number>()
  while (putIndex < putOrder.length) {
    if (stack.peek() === popOrder[popIndex]) {
      stack.pop()
      popIndex++
    }
    if (putOrder[putIndex] !== popOrder[popIndex]) {
      stack.push(putOrder[putIndex])
      putIndex++
    } else {
      putIndex++
      popIndex++
    }
  }

  while (stack.size()) {
    if (stack.pop() === popOrder[popIndex]) {
      popIndex++
    } else return false
  }

  return popIndex >= putOrder.length
}
