import ListNode from './model/ListNode'
import buildLinkedList from './util/buildLinkedList'

const printListReversinglyIteratively = <Value>(node: ListNode<Value>) => {
  const stack = []

  for (
    let currentNode: null | ListNode<Value> = node;
    currentNode;
    currentNode = currentNode.next
  ) {
    stack.push(currentNode)
  }

  while (stack.length) {
    console.log(stack.pop()!.val)
  }
}

const printListReversinglyRecursively = <Value>(
  node: ListNode<Value> | null
) => {
  if (!node) return

  printListReversinglyRecursively(node.next)

  console.log(node.val)
}

printListReversinglyRecursively(buildLinkedList([1, 2, 3, 4, 5]))
