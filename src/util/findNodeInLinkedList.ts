import ListNode from '../model/ListNode'

export const findNodeInLinkedListByValue = <Value>(
  head: ListNode<Value>,
  val: Value
): null | ListNode<Value> => {
  for (let x: null | ListNode<Value> = head; x; x = x.next) {
    if (x.val === val) return x
  }

  return null
}
