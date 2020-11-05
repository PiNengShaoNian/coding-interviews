import { longestSubstringWithoutDuplication } from '../exercise48'

test('longestSubstringWithoutDuplication能正确的找出子字符串的长度', () => {
  expect(longestSubstringWithoutDuplication('arabcacfr')).toBe(4)
  expect(longestSubstringWithoutDuplication('abcdefg')).toBe(7)
  expect(longestSubstringWithoutDuplication('abcabcabc')).toBe(3)
  expect(longestSubstringWithoutDuplication('6666666666666')).toBe(1)
})
