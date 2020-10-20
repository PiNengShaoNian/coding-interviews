export default class ListNode<Value> {
  constructor(public val: Value, public next: ListNode<Value> | null) {}

  *[Symbol.iterator]() {
    for (let x: null | ListNode<Value> = this; x; x = x.next) {
      yield x.val
    }
  }
}
