import TreeNode from './model/TreeNode'

export const serialize = <Value>(root: TreeNode<Value>): string => {
  let res = ''

  const serializeTree = (root: TreeNode<Value>, result: string): void => {
    res += root.value + ','
    if (root.left) serializeTree(root.left, result)
    else res += '$' + ','

    if (root.right) serializeTree(root.right, result)
    else res += '$' + ','
  }

  serializeTree(root, res)

  return res.slice(0, res.length - 1)
}

type RefObject<Value> = {
  current: Value
}
const useRef = <Value>(value: Value): RefObject<Value> => ({
  current: value,
})

export const deserialize = <Value>(treeStr: string): TreeNode<Value> => {
  let index = 0
  const deserializeTree = (root: RefObject<null | TreeNode<Value>>): void => {
    if (index >= treeStr.length) return

    let endIndex: number = index
    while (treeStr[endIndex] !== ',' && endIndex < treeStr.length) {
      endIndex++
    }

    const value = treeStr.slice(index, endIndex)
    index = endIndex + 1
    if (value !== '$') {
      const leftRef = useRef(null)
      const rightRef = useRef(null)
      root.current = new TreeNode(JSON.parse(value))

      deserializeTree(leftRef)
      root.current.left = leftRef.current

      deserializeTree(rightRef)
      root.current.right = rightRef.current
    }
  }

  const root = useRef(null)
  deserializeTree(root)

  return root.current!
}
