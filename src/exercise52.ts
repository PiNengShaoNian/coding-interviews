import ListNode from './model/ListNode'

export const findFirstCommonNode = <Value>(
  head1: ListNode<Value>,
  head2: ListNode<Value>
): ListNode<Value> | null => {
  if (!head1 || !head2) return null

  let list1Len = 0

  for (let x: null | ListNode<Value> = head1; x; x = x.next) {
    list1Len++
  }

  let list2Len = 0

  for (let x: null | ListNode<Value> = head2; x; x = x.next) {
    list2Len++
  }

  let maxList = list1Len > list2Len ? head1 : head2

  const offset = Math.abs(list2Len - list1Len)

  for (let i = 0; i < offset; i++) {
    maxList = maxList.next!
  }

  let p1: ListNode<Value> | null = head1
  let p2: ListNode<Value> | null = head2
  while (p1 && p2) {
    if (p1.val === p2.val) return p1
    p1 = p1.next
    p2 = p2.next
  }

  return null
}
