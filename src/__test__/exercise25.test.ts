import { merge, mergeIteratively } from '../exercise25'
import buildLinkedList from '../util/buildLinkedList'

test('能正确地合并两个链表', () => {
  expect([
    ...merge(buildLinkedList([2, 4, 6]), buildLinkedList([1, 3, 5]))!,
  ]).toEqual([1, 2, 3, 4, 5, 6])
  expect([
    ...merge(buildLinkedList([1, 3, 3]), buildLinkedList([3, 4, 5]))!,
  ]).toEqual([1, 3, 3, 3, 4, 5])

  expect([
    ...mergeIteratively(
      buildLinkedList([1, 3, 5]),
      buildLinkedList([2, 4, 6])
    )!,
  ]).toEqual([1, 2, 3, 4, 5, 6])

  expect([
    ...mergeIteratively(
      buildLinkedList([1, 3, 3]),
      buildLinkedList([3, 4, 5])
    )!,
  ]).toEqual([1, 3, 3, 3, 4, 5])
})
