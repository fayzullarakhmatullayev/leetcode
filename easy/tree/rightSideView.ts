import { createTree, TreeNode } from '../../utils';

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null): void {
    if (!node) return;

    console.log(node.val);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return result;
}

console.log(rightSideView(createTree([1, 2, 3, null, 5, null, 4]))); //[1,3,4]
