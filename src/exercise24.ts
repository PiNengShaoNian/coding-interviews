import ListNode from './model/ListNode'

export const reverseList = <Value>(
  head: ListNode<Value>
): ListNode<Value> | null => {
  let prev = null
  let cur = head

  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next!
  }

  return prev
}

export const reverseListRecursively = <Value>(
  head: ListNode<Value> | null
): ListNode<Value> | null => {
  if (!head || !head.next) {
    return head
  }

  const rev = reverseList(head.next)

  head.next.next = head
  head.next = null

  return rev
}
