import { verifySequenceOfBST } from '../exercise33'

test('verifySequenceOfBST工作正常', () => {
  const postorder1 = [5, 7, 6, 9, 11, 10, 8]
  const postorder2 = [7, 4, 6, 5]
  const postorder3 = [3, 2, 1]
  const postorder4 = [1, 2, 3]
  const postorder5 = [3, 6, 2, 5]

  expect(verifySequenceOfBST(postorder1)).toBeTruthy()
  expect(verifySequenceOfBST(postorder3)).toBeTruthy()
  expect(verifySequenceOfBST(postorder4)).toBeTruthy()
  expect(verifySequenceOfBST(postorder2)).toBeFalsy()
  expect(verifySequenceOfBST(postorder5)).toBeFalsy()
})
