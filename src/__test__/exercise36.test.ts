import { covert } from '../exercise36'
import { buildTree } from '../exercise7'
import TreeNode from '../model/TreeNode'

test('covert能正确地把二叉搜索树转换成双向链表', () => {
  const root = buildTree([10, 6, 4, 8, 14, 12, 16], [4, 6, 8, 10, 12, 14, 16])

  const head = covert(root!)

  expect(head.value).toBe(4)

  const res: number[] = []

  for (let x: null | TreeNode<number> = head; x; x = x.right) {
    res.push(x.value)
  }

  expect(res).toEqual([4, 6, 8, 10, 12, 14, 16])

  let tail = head

  while (tail.right) {
    tail = tail.right
  }

  expect(tail.value).toBe(16)

  const res2: number[] = []

  for (let x: null | TreeNode<number> = tail; x; x = x.left) {
    res2.push(x.value)
  }

  expect(res2).toEqual([16, 14, 12, 10, 8, 6, 4])
})
