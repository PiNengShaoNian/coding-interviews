import TreeNode from '../model/TreeNode'

export const buildTree = <Value>(
  preorder: Value[],
  inorder: Value[]
): TreeNode<Value> | null => {
  //前序遍历
  //           根                       左子树                                                右子树
  //[preLIndex, preLIndex + 1) [preLIndex + 1, preLIndex + pIndex - inLIndex] [preIndex + pIndex - inLIndex + 1, preRIndex]

  //中序遍历
  //        左子树                    根            右子树
  //[inLIndex, pIndex - 1]  [pIndex,pIndex + 1) [pIndex + 1, inRIndex]
  const map = new Map<Value, number>()

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  const constructTree = (
    preLIndex: number,
    preRIndex: number,
    inLIndex: number,
    inRIndex: number
  ): TreeNode<Value> | null => {
    if (preLIndex > preRIndex || inLIndex > inRIndex) return null

    const pIndex = map.get(preorder[preLIndex])!

    const root = new TreeNode(preorder[preLIndex])

    root.left = constructTree(
      preLIndex + 1,
      preLIndex + pIndex - inLIndex,
      inLIndex,
      pIndex - 1
    )
    root.right = constructTree(
      preLIndex + pIndex - inLIndex + 1,
      preRIndex,
      pIndex + 1,
      inRIndex
    )

    return root
  }

  return constructTree(0, preorder.length - 1, 0, inorder.length - 1)
}
