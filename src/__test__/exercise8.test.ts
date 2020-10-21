import { getNext, buildTree, findNodeByValue } from '../exercise8'

test('能正确的获取下一个节点', () => {
  const inorder: string[] = [...'dbheiafcg']
  const preorder: string[] = [...'abdehicfg']

  const root = buildTree<string>(preorder, inorder)!

  const nodeI = findNodeByValue(root, 'i')!
  const nodeA = findNodeByValue(root, 'a')!
  const nodeD = findNodeByValue(root, 'd')!

  expect(nodeI?.value).toBe('i')
  expect(nodeA?.value).toBe('a')
  expect(nodeD?.value).toBe('d')

  expect(getNext(nodeI)!.value).toBe('a')
  expect(getNext(nodeA)!.value).toBe('f')
  expect(getNext(nodeD)!.value).toBe('b')
})
