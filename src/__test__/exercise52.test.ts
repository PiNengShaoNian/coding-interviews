import { findFirstCommonNode } from '../exercise52'
import buildLinkedList from '../util/buildLinkedList'

test('findFirstCommonNode能正确的找到公共节点', () => {
  let list1 = buildLinkedList([1, 3, 5, 7, 9])
  let list2 = buildLinkedList([2, 4, 6])
  let common = buildLinkedList([10, 11, 12])

  list1.next = common
  list2.next = common

  expect(findFirstCommonNode(list1, list2)?.val).toBe(10)

  list1 = buildLinkedList([1, 3, 5, 7, 9])

  expect(findFirstCommonNode(list1, list1)?.val).toBe(1)

  list1 = buildLinkedList([1, 3, 5, 7, 9])
  list2 = buildLinkedList([2, 4, 6])
  common = buildLinkedList([10])
  list1.next = common
  list2.next = common

  expect(findFirstCommonNode(list1, list2)?.val).toBe(10)

  list1 = buildLinkedList([1, 3, 5, 7, 9])
  list2 = buildLinkedList([2, 4, 6])

  expect(findFirstCommonNode(list1, list2)).toBeNull()
})
