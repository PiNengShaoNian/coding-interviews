export const replaceBlank = (chars: string[]): string[] => {
  let blankCount = 0
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ' ') blankCount++
  }

  let indexOfNew = chars.length + 2 * blankCount
  let indexOfOrigin = chars.length - 1
  while (indexOfNew > indexOfOrigin && indexOfOrigin >= 0) {
    if (chars[indexOfOrigin] === ' ') {
      chars[--indexOfNew] = '0'
      chars[--indexOfNew] = '2'
      chars[--indexOfNew] = '%'
    } else {
      chars[--indexOfNew] = chars[indexOfOrigin]
    }
    --indexOfOrigin
  }

  return chars
}
