import { createTree, TreeNode } from '../../utils';

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null): void {
    if (!node) return;

    dfs(node.left);
    dfs(node.right);

    result.push(node.val);
  }

  dfs(root);

  return result;
}

console.log(postorderTraversal(createTree([1, null, 2, 3]))); // [3,2,1]
