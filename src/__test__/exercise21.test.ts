import { reorderOddEven } from '../exercise21'
import shuffle from '../util/shuffle'

test('reorderOddEven能正常工作', () => {
  const arr = Array.from({ length: 111 }, (_, i) => i)

  shuffle(arr)

  reorderOddEven(arr)

  for (let i = 0; i < arr.length; i++) {
    if (i <= 54) expect(arr[i] % 2).toBe(1)
    else expect(arr[i] % 2).toBe(0)
  }
})
