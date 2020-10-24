import { listenerCount } from 'process'
import ListNode from './model/ListNode'

export const deleteNode = <Value>(
  listHead: ListNode<Value>,
  toBeDeleted: ListNode<Value>
): null | ListNode<Value> => {
  if (!listHead.next) return null

  if (listHead.val === toBeDeleted.val) {
    return listHead.next
  }

  if (toBeDeleted.next) {
    toBeDeleted.val = toBeDeleted.next.val
    toBeDeleted.next = toBeDeleted.next.next
  } else {
    let prevNode = listHead
    while (prevNode.next!.val !== toBeDeleted.val) {
      prevNode = prevNode.next!
    }

    prevNode.next = null
  }

  return listHead
}

export const deleteDuplication = (
  head: ListNode<number>
): ListNode<number> | null => {
  if (!head.next) return head

  const dummyHead = new ListNode<number>(head.val - 1, head)

  let pre = dummyHead
  let cur: ListNode<number> | null = head

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      const val = cur.val

      while (cur && cur.val === val) cur = cur.next

      pre.next = cur
    } else {
      pre = cur
      cur = cur.next
    }
  }

  return dummyHead.next
}
