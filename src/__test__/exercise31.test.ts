import { isPopOrder } from '../exercise31'

test('isPopOrder能正常工作', () => {
  const putOrder = [1, 2, 3, 4, 5]
  const popOrder = [4, 5, 3, 2, 1]
  const popOrder1 = [4, 3, 5, 1, 2]
  const popOrder2 = [1, 2, 3, 4, 5]
  expect(isPopOrder(putOrder, popOrder)).toBeTruthy()
  expect(isPopOrder(putOrder, popOrder1)).toBeFalsy()
  expect(isPopOrder(putOrder, popOrder2)).toBeTruthy()
})
