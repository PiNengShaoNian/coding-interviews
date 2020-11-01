import { serialize, deserialize } from '../exercise37'
import { buildTree } from '../util/buildTree'

test('能正确的序列化二叉树', () => {
  const root = buildTree([1, 2, 4, 3, 5, 6], [4, 2, 1, 5, 3, 6])!
  const serializedTree1 = '1,2,4,$,$,$,3,5,$,$,6,$,$'
  const serializedTree2 = '1,1,$,$,1,$,$'
  const serializedTree3 = '1,$,2,$,3,$,$'
  expect(serialize(root)).toBe(serializedTree1)

  expect(deserialize(serializedTree1)).toEqual(root)
  expect(serialize(deserialize<number>(serializedTree1))).toBe(serializedTree1)
  expect(serialize(deserialize<number>(serializedTree2))).toBe(serializedTree2)
  expect(serialize(deserialize<number>(serializedTree3))).toBe(serializedTree3)
})
