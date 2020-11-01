export const permutation = (str: string): string[] => {
  const res: string[] = []

  const _permutation = (str: string, begin: number, res: string[]): void => {
    if (begin === str.length) {
      res.push(str)
      return
    }

    for (let i = begin; i < str.length; i++) {
      str = str.slice(i, i + 1) + str.slice(0, i) + str.slice(i + 1)
      _permutation(str, begin + 1, res)
    }
  }

  _permutation(str, 0, res)

  return res
}

export const combination = (str: string): Set<string> => {
  const res: Set<string> = new Set()

  const collect = (
    chars: string,
    str: string,
    len: number,
    res: Set<string>
  ): void => {
    if (len === 0) {
      res.add(str)
    }

    if (!chars.length) return

    str += chars[0]
    collect(chars.substring(1), str, len - 1, res)
    str = str.slice(0, str.length - 1)

    collect(chars.substring(1), str, len, res)
  }
  for (let i = 1; i <= str.length; i++) {
    collect(str, '', i, res)
  }
  return res
}

type Validator = (permuation: string) => boolean
export const allPossiblePermutation = <Value>(
  vertices: Value[],
  validator: Validator
): string[] => {
  const res: string[] = []

  const permutation = (str: string, begin: number, res: string[]) => {
    if (begin === str.length) {
      if (validator(str)) {
        res.push(str)
      }
    }

    for (let i = begin; i < str.length; i++) {
      const char = str[i]
      const rest = str.slice(0, i) + str.slice(i + 1, str.length)

      permutation(char + rest, begin + 1, res)
    }
  }

  permutation(vertices.join(''), 0, res)

  return res
}

const allPossibleCubes = (vertices: number[]) => {
  return allPossiblePermutation(vertices, (permutation: string) => {
    const digits: number[] = [...permutation].map((v) => +v)

    if (
      digits[0] + digits[1] + digits[2] + digits[3] ===
        digits[4] + digits[5] + digits[6] + digits[7] &&
      digits[0] + digits[2] + digits[4] + digits[6] ===
        digits[1] + digits[3] + digits[5] + digits[7] &&
      digits[0] + digits[1] + digits[4] + digits[5] ===
        digits[2] + digits[3] + digits[6] + digits[7]
    ) {
      return true
    }
    return false
  })
}

const allPossiblePlacements = allPossiblePermutation(
  [0, 1, 2, 3, 4, 5, 6, 7],
  (permutation) => {
    const columnIndexes = [...permutation].map((v) => +v)

    for (let i = 0; i < 8; i++) {
      for (let j = i + 1; j < 8; j++) {
        if (
          i - j === columnIndexes[i] - columnIndexes[j] ||
          j - i === columnIndexes[i] - columnIndexes[j]
        )
          return false
      }
    }
    return true
  }
)
