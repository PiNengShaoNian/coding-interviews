import {
  firstNotRepeatingChar,
  deleteChars,
  deleteDuplication,
  isAnagram,
  CharsStatistics,
} from '../exercise50'

test('firstNotRepeatingChar正常工作', () => {
  expect(firstNotRepeatingChar('abaccdeff')).toBe('b')
  expect(firstNotRepeatingChar('aabc')).toBe('b')
  expect(firstNotRepeatingChar('abcabc')).toBeNull()
})

test('deleteChars正常工作', () => {
  expect(deleteChars('We are students.', 'aeiou')).toBe('W r stdnts.')
})

test('deleteDuplication正常工作', () => {
  expect(deleteDuplication('google')).toBe('gole')
})

test('isAnagram正常工作', () => {
  expect(isAnagram('silent', 'listen')).toBeTruthy()

  expect(isAnagram('evil', 'eval')).toBeFalsy()

  expect(isAnagram('evil', 'live')).toBeTruthy()
})

test('CharsStatistics正常工作', () => {
  const cs = new CharsStatistics()

  cs.insert('g')
  cs.insert('o')

  expect(cs.firstAppearingOnce()).toBe('g')
  cs.insert('o')
  cs.insert('g')
  expect(cs.firstAppearingOnce()).toBeNull()

  cs.insert('e')
  expect(cs.firstAppearingOnce()).toBe('e')
})
