import { findKthToTail, findMidNode } from '../exercise22'
import buildLinkedList from '../util/buildLinkedList'

test('findKthToTail能找到正确元素', () => {
  const list = buildLinkedList([1, 2, 3, 4, 5])

  expect(findKthToTail(list, 1)?.val).toBe(5)
  expect(findKthToTail(list, 0)).toBe(null)

  expect(findKthToTail(list, 3)?.val).toBe(3)
})

test('findMidNode能找到正确元素', () => {
  const list1 = buildLinkedList([1, 2, 3, 4, 5])

  expect(findMidNode(list1)?.val).toBe(3)

  const list2 = buildLinkedList([1, 2, 3, 4, 5, 6])

  expect(findMidNode(list2)?.val).toBe(4)
})
