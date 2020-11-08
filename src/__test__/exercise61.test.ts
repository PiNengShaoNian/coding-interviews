import { isContinuous } from '../exercise61'

test('isContinuous正常工作', () => {
  expect(isContinuous([0, 0, 3, 1, 4])).toBeTruthy()
  expect(isContinuous([0, 3, 1, 4, 3])).toBeFalsy()
  expect(isContinuous([1, 2, 3, 5, 6])).toBeFalsy()
  expect(isContinuous([1, 2, 3, 5, 0])).toBeTruthy()
})
