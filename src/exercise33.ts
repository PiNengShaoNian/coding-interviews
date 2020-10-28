export const verifySequenceOfBST = (postorder: number[]): boolean => {
  if (postorder.length < 2) return true

  const verify = (start: number, end: number, postorder: number[]): boolean => {
    if (start >= end) return true

    let dividerIndex = end - 1
    let result = true
    const root = postorder[end]

    while (postorder[dividerIndex] > root) {
      dividerIndex--
    }

    for (let i = start; i <= dividerIndex; i++) {
      if (postorder[i] > root) {
        result = false
        break
      }
    }

    if (result) {
      result = verify(start, dividerIndex - 1, postorder)
    }

    if (result) {
      result = verify(dividerIndex, end - 1, postorder)
    }

    return result
  }

  return verify(0, postorder.length - 1, postorder)
}
