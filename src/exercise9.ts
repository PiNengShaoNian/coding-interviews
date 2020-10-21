import Queue from './model/Queue'
import ArrayStack from './util/ArrayStack'

export default class CQueue<Value> implements Queue<Value> {
  private stackIn: ArrayStack<Value> = new ArrayStack()
  private stackOut: ArrayStack<Value> = new ArrayStack()

  private _size: number = 0
  size(): number {
    return this._size
  }
  isEmpty(): boolean {
    return this._size === 0
  }

  enqueue(e: Value): void {
    this.stackIn.push(e)
    this._size++
  }

  private transfer() {
    while (this.stackIn.size()) {
      this.stackOut.push(this.stackIn.pop()!)
    }
  }

  front(): Value | null {
    if (this.isEmpty()) return null

    if (this.stackOut.isEmpty()) this.transfer()

    return this.stackOut.peek()
  }

  dequeue(): Value | null {
    if (this.isEmpty()) return null

    if (this.stackOut.isEmpty()) this.transfer()

    this._size--
    return this.stackOut.pop()
  }
}
