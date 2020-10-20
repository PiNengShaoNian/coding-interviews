import { replaceBlank } from '../exercise5'

test('replaceBlank工作正常', () => {
  expect(replaceBlank([...'We are happy.']).join('')).toBe(
    'We are happy.'.replace(/ /g, '%20')
  )
})
