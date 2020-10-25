import ListNode from './model/ListNode'

export const meetingNode = <Value>(
  head: ListNode<Value>
): ListNode<Value> | null => {
  let pSlow = head
  let pFast = head

  while (pFast.next) {
    pFast = pFast.next
    pSlow = pSlow.next!

    if (pFast.next) pFast = pFast.next
    else return null

    if (pFast === pSlow) return pFast
  }

  return null
}

export const entryNodeOfLoop = <Value>(
  head: ListNode<Value>
): ListNode<Value> | null => {
  let node = meetingNode(head)

  if (!node) return null

  let loopSize = 0
  let curNode = node
  while (curNode.next) {
    loopSize++
    if (curNode.next !== node) curNode = curNode!.next
    else break
  }

  let pFront = head

  for (let i = 0; i < loopSize; i++) {
    pFront = pFront.next!
  }

  let pBehind = head

  while (pFront.next) {
    if (pFront === pBehind) return pFront

    pFront = pFront.next
    pBehind = pBehind.next!
  }

  return null
}
