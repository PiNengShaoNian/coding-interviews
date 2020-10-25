import { meetingNode, entryNodeOfLoop } from '../exercise23'
import buildLinkedList from '../util/buildLinkedList'
import { findNodeInLinkedListByValue } from '../util/findNodeInLinkedList'

test('meetingNode正常工作', () => {
  const list = buildLinkedList([1, 2, 3, 4, 5, 6])

  const node6 = findNodeInLinkedListByValue(list, 6)!
  const node3 = findNodeInLinkedListByValue(list, 3)!

  expect(node6.val).toBe(6)
  expect(node3.val).toBe(3)

  expect(meetingNode(list)).toBeNull()

  node6.next = node3

  expect(meetingNode(list)).not.toBeNull()
})

test('entryNodeOfLoop能正确的找到环的入口节点', () => {
  const list1 = buildLinkedList([1, 2, 3, 4, 5, 6])

  const node6 = findNodeInLinkedListByValue(list1, 6)!
  const node3 = findNodeInLinkedListByValue(list1, 3)!
  const node4 = findNodeInLinkedListByValue(list1, 4)!

  expect(entryNodeOfLoop(list1)).toBeNull()

  node6.next = node3

  expect(entryNodeOfLoop(list1)?.val).toBe(3)

  node6.next = node6

  expect(entryNodeOfLoop(list1)?.val).toBe(6)

  node6.next = node4

  expect(entryNodeOfLoop(list1)?.val).toBe(4)
})
