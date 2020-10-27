import Stack from './model/Stack'

export class StackWithMin implements Stack<number> {
  private aux: number[] = []
  private data: number[] = []

  min(): number {
    return this.aux[this.aux.length - 1] ?? Infinity
  }

  push(item: number): void {
    if (item < this.min()) {
      this.aux.push(item)
    } else {
      this.aux.push(this.min())
    }
    this.data.push(item)
  }
  
  pop(): number | null {
    if (this.isEmpty()) return null

    this.aux.pop()
    return this.data.pop()!
  }
  peek(): number | null {
    return this.data[this.data.length - 1]
  }
  size(): number {
    return this.data.length
  }
  isEmpty(): boolean {
    return this.size() === 0
  }
}
