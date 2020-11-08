import { reverseSentence, leftRotateString } from '../exercise58'

test('reverseSentence能正确的反转句子', () => {
  expect(reverseSentence('I am a student.')).toBe('student. a am I')
})

test('leftRotateString正常工作', () => {
    expect(leftRotateString('abcdefg', 2)).toBe('cdefgab')
})
