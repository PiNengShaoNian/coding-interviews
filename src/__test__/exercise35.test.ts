import { clone, ComplexListNode } from '../exercise35'
import { findNodeInLinkedListByValue } from '../util/findNodeInLinkedList'

test('能正常复制复杂链表', () => {
  const head = new ComplexListNode(
    1,
    new ComplexListNode(
      2,
      new ComplexListNode(
        3,
        new ComplexListNode(4, new ComplexListNode(5, null, null), null),
        null
      ),
      null
    ),
    null
  )

  expect([...clone(head)]).toEqual([1, 2, 3, 4, 5])

  const node3 = findNodeInLinkedListByValue(head, 3)! as ComplexListNode
  const node4 = findNodeInLinkedListByValue(head, 4)! as ComplexListNode

  expect(node3.val).toBe(3)
  expect(node4.val).toBe(4)

  head.sibling = node3
  node4.sibling = head
  node3.sibling = node3

  const cloneHead = clone(head)

  expect(cloneHead.sibling?.val).toBe(3)
  expect(
    (findNodeInLinkedListByValue(cloneHead, 4) as ComplexListNode).sibling?.val
  ).toBe(1)
  expect(
    (findNodeInLinkedListByValue(cloneHead, 3) as ComplexListNode).sibling?.val
  ).toBe(3)
})
