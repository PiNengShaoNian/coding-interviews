export const longestSubstringWithoutDuplication = (str: string): number => {
  if (!str.length) return 0

  const lens: number[] = []
  lens[0] = 1
  let maxLength = 1

  for (let i = 1; i < str.length; i++) {
    const char = str[i]

    const lastIndexInStr = str.lastIndexOf(char, i - 1)
    let curLength: number

    if (lastIndexInStr === -1 || i - lastIndexInStr > lens[i - 1]) {
      lens[i] = curLength = lens[i - 1] + 1
    } else {
      lens[i] = curLength = i - lastIndexInStr
    }

    if (curLength > maxLength) maxLength = curLength
  }

  return maxLength
}
