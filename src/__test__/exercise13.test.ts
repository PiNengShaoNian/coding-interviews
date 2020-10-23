import { moveingCount } from '../exercise13'

test('moveingCount工作正常', () => {
  //   0   1   2
  //0  0   1   2
  //1  1   2   3
  //2  2   3   4
  expect(moveingCount(1, 3, 3)).toBe(3)
  expect(moveingCount(2, 3, 3)).toBe(6)
})
