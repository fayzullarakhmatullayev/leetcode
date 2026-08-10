import { createTree, TreeNode } from '../../utils';

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null): void {
    if (!node) return;

    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }

  dfs(root);

  return result;
}

console.log(inorderTraversal(createTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]))); // [4,2,6,5,7,1,3,9,8]
