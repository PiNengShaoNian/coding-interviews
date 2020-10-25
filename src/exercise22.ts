import ListNode from './model/ListNode'

export const findKthToTail = <Value>(
  head: ListNode<Value>,
  k: number
): null | ListNode<Value> => {
  if (k <= 0) return null

  let aHead = head
  for (let i = 0; i < k - 1; i++) {
    if (aHead.next) aHead = aHead.next
    else return null
  }

  let bHead = head
  while (aHead.next) {
    aHead = aHead.next
    bHead = bHead.next!
  }

  return bHead
}

export const findMidNode = <Value>(
  head: ListNode<Value>
): null | ListNode<Value> => {
  let aHead = head
  let bHead = head

  while (aHead.next) {
    aHead = aHead.next
    bHead = bHead.next!
    if (aHead.next) aHead = aHead.next
    else break
  }

  return bHead
}
