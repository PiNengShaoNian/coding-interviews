import MaxPQ from './util/MaxPQ'
import MinPQ from './util/MinPQ'

export class DynamicArray {
  private minPQ: MinPQ<number> = new MinPQ()
  private maxPQ: MaxPQ<number> = new MaxPQ()

  size(): number {
    return this.minPQ.size() + this.maxPQ.size()
  }

  insert(v: number): void {
    if (this.size() % 2 === 0) {
      const max = this.maxPQ.max()

      if (max === null || max < v) {
        this.minPQ.insert(v)
      } else {
        this.minPQ.insert(this.maxPQ.deleteMax())
        this.maxPQ.insert(v)
      }
    } else {
      const min = this.minPQ.min()

      if (min === null || v < min) {
        this.maxPQ.insert(v)
      } else {
        this.maxPQ.insert(this.minPQ.deleteMin())
        this.minPQ.insert(v)
      }
    }
  }

  getMedian(): number | null {
    const size = this.size()

    if (size === 0) return null

    if (size % 2 === 0) {
      return (this.minPQ.min()! + this.maxPQ.max()!) / 2
    } else {
      return this.minPQ.min()
    }
  }
}
