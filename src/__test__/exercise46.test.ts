import {
  getTransitionCount,
  getTransitionCountRecursively,
} from '../exercise46'

test('getTransitionCount能正确地计算出翻译数量', () => {
  expect(getTransitionCount('12258')).toBe(5)
  expect(getTransitionCount('3241')).toBe(2)
  expect(getTransitionCount('9')).toBe(1)
  expect(getTransitionCount('26')).toBe(1)

  expect(getTransitionCountRecursively('12258')).toBe(5)
  expect(getTransitionCountRecursively('3241')).toBe(2)
  expect(getTransitionCountRecursively('9')).toBe(1)
  expect(getTransitionCountRecursively('26')).toBe(1)
})
