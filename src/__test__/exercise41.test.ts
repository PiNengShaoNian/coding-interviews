import { DynamicArray } from '../exercise41'

test('DynamicArray能正确的求出中位数', () => {
  const dynamicArray = new DynamicArray()

  expect(dynamicArray.getMedian()).toBe(null)

  dynamicArray.insert(3)
  expect(dynamicArray.getMedian()).toBe(3)
  dynamicArray.insert(2)
  dynamicArray.insert(1)

  expect(dynamicArray.getMedian()).toBe(2)
  dynamicArray.insert(4)
  expect(dynamicArray.getMedian()).toBe(2.5)
})
