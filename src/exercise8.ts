class TreeNode<Value> {
  public left: TreeNode<Value> | null = null
  public right: TreeNode<Value> | null = null
  public parent: TreeNode<Value> | null = null
  constructor(public value: Value) {}
}

export const getNext = <Value>(
  node: TreeNode<Value>
): TreeNode<Value> | null => {
  if (node.right) {
    let parent: TreeNode<Value> = node
    let curNode: TreeNode<Value> | null = node.right

    while (curNode) {
      parent = curNode
      curNode = curNode.left
    }

    return parent
  } else if (node.parent && node.parent.left === node) {
    return node.parent
  } else {
    let parent = node.parent
    while (parent) {
      if (parent.parent) {
        if (parent.parent.left === parent) return parent.parent
        else parent = parent.parent
      } else return null
    }

    return null
  }
}

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
    inRIndex: number,
    parent: TreeNode<Value> | null
  ): TreeNode<Value> | null => {
    if (preLIndex > preRIndex || inLIndex > inRIndex) return null

    const pIndex = map.get(preorder[preLIndex])!

    const root = new TreeNode(preorder[preLIndex])
    root.parent = parent

    root.left = constructTree(
      preLIndex + 1,
      preLIndex + pIndex - inLIndex,
      inLIndex,
      pIndex - 1,
      root
    )
    root.right = constructTree(
      preLIndex + pIndex - inLIndex + 1,
      preRIndex,
      pIndex + 1,
      inRIndex,
      root
    )

    return root
  }

  return constructTree(0, preorder.length - 1, 0, inorder.length - 1, null)
}

export const findNodeByValue = <Value>(
  node: TreeNode<Value>,
  value: Value
): TreeNode<Value> | null => {
  const stack: TreeNode<Value>[] = []

  stack.push(node)

  while (stack.length) {
    const curNode = stack.pop()!

    if (curNode.value === value) return curNode
    else {
      curNode.left && stack.push(curNode.left)
      curNode.right && stack.push(curNode.right)
    }
  }

  return null
}
