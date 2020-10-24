import { deleteNode, deleteDuplication } from '../exercise18'
import buildLinkedList from '../util/buildLinkedList'
import { findNodeInLinkedListByValue } from '../util/findNodeInLinkedList'

describe('deleteNode', () => {
  test('能正确地删除中间节点', () => {
    const listHead = buildLinkedList<number>([1, 2, 3, 4])

    const node3 = findNodeInLinkedListByValue(listHead, 3)!
    const node2 = findNodeInLinkedListByValue(listHead, 2)!

    expect(node3?.val).toBe(3)
    expect(node2?.val).toBe(2)
    deleteNode(listHead, node3)
    deleteNode(listHead, node2)

    expect([...listHead!]).toEqual([1, 4])
  })

  test('能正确地删除尾节点', () => {
    const listHead = buildLinkedList<number>([1, 2, 3, 4])

    const node4 = findNodeInLinkedListByValue(listHead, 4)!
    const node3 = findNodeInLinkedListByValue(listHead, 3)!
    const node2 = findNodeInLinkedListByValue(listHead, 2)!

    expect(node4?.val).toBe(4)
    expect(node3?.val).toBe(3)
    expect(node2?.val).toBe(2)

    deleteNode(listHead, node4)
    deleteNode(listHead, node3)
    deleteNode(listHead, node2)

    expect([...listHead]).toEqual([1])
  })

  test('能正确地删除头节点', () => {
    let listHead = buildLinkedList<number>([1, 2, 3, 4])

    const node1 = findNodeInLinkedListByValue(listHead, 1)!
    const node2 = findNodeInLinkedListByValue(listHead, 2)!
    const node3 = findNodeInLinkedListByValue(listHead, 3)!

    expect(node1?.val).toBe(1)
    expect(node2?.val).toBe(2)
    expect(node3?.val).toBe(3)

    listHead = deleteNode(listHead, node1)!
    listHead = deleteNode(listHead, node2)!
    listHead = deleteNode(listHead, node3)!

    expect([...listHead]).toEqual([4])
  })
})

describe('deleteDuplication', () => {
  let head = buildLinkedList([1, 1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7])

  head = deleteDuplication(head)!

  expect([...head]).toEqual([2, 3, 5, 6])
})
