import ListNode from './model/ListNode'

export const merge = (
  head1: ListNode<number> | null,
  head2: ListNode<number> | null
): ListNode<number> | null => {
  if (!head1) return head2
  else if (!head2) return head1

  let mergeHead: ListNode<number> | null = null
  if (head1.val > head2.val) {
    mergeHead = head2

    head2.next = merge(head2.next, head1)
  } else {
    mergeHead = head1

    head1.next = merge(head1.next, head2)
  }

  return mergeHead
}

export const mergeIteratively = (
  head1: ListNode<number> | null,
  head2: ListNode<number> | null
): ListNode<number> | null => {
  if (!head1) return head2
  else if (!head2) return head1

  let pMerge
  let pList1
  let pList2
  let mergeHead

  if (head1.val > head2.val) {
    pMerge = head2
    mergeHead = head2
    pList2 = head2.next
    pList1 = head2
  } else {
    pMerge = head1
    mergeHead = head1
    pList1 = head1.next
    pList2 = head2
  }

  while (pList2 || pList1) {
    if (pList2 && pList1) {
      if (pList1.val > pList2.val) {
        pMerge.next = pList2
        pMerge = pList2
        pList2 = pList2.next
      } else {
        pMerge.next = pList1
        pMerge = pList1
        pList1 = pList1.next
      }
    } else if (pList1) {
      pMerge.next = pList1
      pMerge = pList1
      pList1 = pList1.next
    } else if (pList2) {
      pMerge.next = pList2
      pMerge = pList2
      pList2 = pList2.next
    }
  }

  return mergeHead
}
