import { createTree, TreeNode } from '../../utils';

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null): void {
    if (!node) return;

    result.push(node.val);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return result;
}

console.log(preorderTraversal(createTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]))); // [1,2,4,5,6,7,3,8,9]
