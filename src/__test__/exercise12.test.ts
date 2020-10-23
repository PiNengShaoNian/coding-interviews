import { hasPath } from '../exercise12'

test('能正确地找到路径', () => {
  expect(
    hasPath(
      [
        ['a', 'b', 't', 'g'],
        ['c', 'f', 'c', 's'],
        ['j', 'd', 'e', 'h'],
      ],
      'bfce'
    )
  ).toBeTruthy()
  expect(
    hasPath(
      [
        ['a', 'b', 't', 'g'],
        ['c', 'f', 'c', 's'],
        ['j', 'd', 'e', 'h'],
      ],
      'hectbacj'
    )
  ).toBeTruthy()
  expect(
    hasPath(
      [
        ['a', 'b', 'c', 'd'],
      ],
      'abcd'
    )
  ).toBeTruthy()
  expect(
    hasPath(
      [
        ['a', 'b', 't', 'g'],
        ['c', 'f', 'c', 's'],
        ['j', 'd', 'e', 'h'],
      ],
      'abfb'
    )
  ).toBeFalsy()
})
