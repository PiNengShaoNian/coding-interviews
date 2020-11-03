import { getMinNumber } from '../exercise45'

test('getMinNumber能获得数组最小拼接数字', () => {
  expect(getMinNumber([3, 32, 321])).toEqual('321323')

  expect(getMinNumber([3, 2, 5, 4, 1])).toBe('12345')
})
