import { createTree, TreeNode } from '../../utils';

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  function dfs(root: TreeNode | null): number {
    if (!root) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);

    if (left === -1 || right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
  }

  return dfs(root) !== -1;
}

console.log(isBalanced(createTree([3, 9, 20, null, null, 15, 7])));
console.log(isBalanced(createTree([1, 2, 2, 3, 3, null, null, 4, 4])));
console.log(isBalanced(createTree([1, null, 2, null, 3])));
