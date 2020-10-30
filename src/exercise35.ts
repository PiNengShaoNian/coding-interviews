export class ComplexListNode {
  constructor(
    public val: number,
    public next: ComplexListNode | null,
    public sibling: ComplexListNode | null
  ) {}

  *[Symbol.iterator]() {
    for (let node: null | ComplexListNode = this; node; node = node.next) {
      yield node.val
    }
  }
}

export const clone = (head: ComplexListNode): ComplexListNode => {
  const cloneNodes = (head: ComplexListNode): void => {
    for (let node: null | ComplexListNode = head; node; node = node.next) {
      node.next = new ComplexListNode(node.val, node.next, null)
      node = node.next
    }
  }

  const connectSiblingNodes = (head: ComplexListNode): void => {
    for (
      let node: null | ComplexListNode = head;
      node;
      node = node?.next ?? null
    ) {
      if (node.next) node.next.sibling = node.sibling?.next ?? null
      node = node.next
    }
  }

  const reconnectNodes = (head: ComplexListNode): ComplexListNode => {
    const dummyhead = new ComplexListNode(-1, head, null)
    let curNode: null | ComplexListNode = dummyhead

    while (curNode) {
      const nextCloneNode: null | ComplexListNode = curNode.next?.next ?? null
      curNode.next = nextCloneNode
      curNode = nextCloneNode
    }

    return dummyhead.next!
  }

  cloneNodes(head)
  connectSiblingNodes(head)
  return reconnectNodes(head)
}
