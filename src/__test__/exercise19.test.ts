import { match, matchSolution2 } from '../exercise19'

test('能够正确的匹配字符串', () => {
  expect(match('aaa', 'a.a')).toBeTruthy()

  expect(match('aaa', 'ab*ac*a')).toBeTruthy()

  expect(match('aaa', 'aa.a')).toBeFalsy()

  expect(match('aaa', 'ab*a')).toBeFalsy()

  expect(
    matchSolution2('aefaD6667777', 'a(ba|c|ef)a[^A-C](666)+(77)*')
  ).toBeTruthy()
})
