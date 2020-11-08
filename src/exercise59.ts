import Queue from './model/Queue'
import Deque from './util/Deque'

export const maxInWindows = (num: number[], size: number): number[] => {
  const result: number[] = []

  if (size >= num.length || size < 1) return result

  const index = new Deque<number>(15)

  for (let i = 0; i < size; i++) {
    while (!index.isEmpty() && num[i] >= num[index.front()!]) {
      index.removeFront()
    }

    index.addFront(i)
  }

  for (let i = size; i < num.length; i++) {
    result.push(num[index.tail()!])

    while (!index.isEmpty() && num[i] >= num[index.front()!]) {
      index.removeFront()
    }

    if (!index.isEmpty() && index.tail()! <= i - size) {
      index.removeLast()
    }

    index.addFront(i)
  }

  result.push(num[index.tail()!])

  return result
}

export class QueueWithMax<Value> implements Queue<Value> {
  private data: Deque<{
    number: Value
    index: number
  }> = new Deque()
  private maximums: Deque<{
    number: Value
    index: number
  }> = new Deque()
  private currentIndex = 0

  size(): number {
    return this.data.size()
  }
  isEmpty(): boolean {
    return this.size() === 0
  }

  enqueue(e: Value): void {
    while (!this.maximums.isEmpty() && e >= this.maximums.tail()!.number) {
      this.maximums.removeLast()
    }

    const internalData = {
      index: this.currentIndex,
      number: e,
    }

    this.data.addLast(internalData)
    this.maximums.addLast(internalData)

    ++this.currentIndex
  }
  front(): Value | null {
    return this.data.front()?.number ?? null
  }

  dequeue(): Value | null {
    if (this.isEmpty()) return null

    if (this.maximums.front()!.index === this.data.front()!.index) {
      this.maximums.removeFront()
    }
    return this.data.removeFront()!.number
  }

  max(): Value | null {
    if (this.isEmpty()) return null

    return this.maximums.front()!.number
  }
}
