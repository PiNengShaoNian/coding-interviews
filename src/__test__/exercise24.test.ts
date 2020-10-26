import { reverseList, reverseListRecursively } from '../exercise24'
import buildLinkedList from '../util/buildLinkedList'

test('能正确的反转链表', () => {
  const list = buildLinkedList([1, 2, 3, 4, 5])

  expect([...reverseList(list)!]).toEqual([5, 4, 3, 2, 1])
  expect([
    ...reverseListRecursively(buildLinkedList([1, 2, 3, 4, 5]))!,
  ]).toEqual([5, 4, 3, 2, 1])

  expect([...reverseList(buildLinkedList([1]))!]).toEqual([1])
})
