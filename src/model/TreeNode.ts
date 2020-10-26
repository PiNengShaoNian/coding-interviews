export default class TreeNode<Value> {
  public left: TreeNode<Value> | null = null
  public right: TreeNode<Value> | null = null
  constructor(public value: Value) {}
}
