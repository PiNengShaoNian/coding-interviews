import TreeNode from './model/TreeNode'

type RefObject<Value> = {
  current: Value
}
const useRef = <Value>(value: Value): RefObject<Value> => ({
  current: value,
})

export const covert = <Value>(root: TreeNode<Value>): TreeNode<Value> => {
  const lastNodeInList = useRef<null | TreeNode<Value>>(null)
  const coverNode = (
    root: TreeNode<Value> | null,
    lastNodeInList: RefObject<null | TreeNode<Value>>
  ): void => {
    if (!root) return

    coverNode(root.left, lastNodeInList)

    root.left = lastNodeInList.current

    if (lastNodeInList.current) lastNodeInList.current.right = root

    lastNodeInList.current = root

    coverNode(root.right, lastNodeInList)
  }

  coverNode(root, lastNodeInList)

  let curNode = lastNodeInList.current

  while (curNode?.left) {
    curNode = curNode.left
  }

  return curNode!
}
