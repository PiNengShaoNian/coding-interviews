const reverse = <Value>(chars: Value[], begin: number, end: number): void => {
  while (begin < end) {
    const temp = chars[begin]
    chars[begin] = chars[end]
    chars[end] = temp
    begin++
    end--
  }
}

export const reverseSentence = (chars: string): string => {
  const result = [...chars]

  let begin = 0
  let end = 0

  reverse(result, begin, chars.length - 1)

  while (begin !== chars.length - 1) {
    if (result[begin] === ' ') {
      begin++
      end++
    } else if (result[end] === ' ' || end === chars.length - 1) {
      reverse(result, begin, --end)
      begin = ++end
    } else {
      end++
    }
  }

  return result.join('')
}

export const leftRotateString = (string: string, n: number): string => {
  if (n <= 0 || n > string.length) return string
  const result = [...string]

  const firstStart = 0
  const firstEnd = n - 1
  const secondStart = n
  const secondEnd = string.length - 1

  reverse(result, firstStart, firstEnd)
  reverse(result, secondStart, secondEnd)

  reverse(result, firstStart, secondEnd)

  return result.join('')
}
