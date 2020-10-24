import { bigIntSum } from '../exercise17'

test('bigIntSum工作正常', () => {
  expect(bigIntSum('1', '9')).toBe('10')
  expect(bigIntSum('1', '99998')).toBe('99999')
})
