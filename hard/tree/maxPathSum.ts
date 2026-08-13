import { createTree, TreeNode } from '../../utils';

function maxPathSum(root: TreeNode | null): number {
  if (!root) return 0;

  let maxSum = -Infinity;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);

    const pathThroughNode = node.val + left + right;

    maxSum = Math.max(maxSum, pathThroughNode);

    return node.val + Math.max(left, right);
  }

  dfs(root);

  return maxSum;
}

console.log(maxPathSum(createTree([1, 2, 3]))); // 6
console.log(maxPathSum(createTree([-10, 9, 20, null, null, 15, 7]))); // 42
console.log(maxPathSum(createTree([1]))); // 1
console.log(maxPathSum(createTree([1, 2]))); // 3
console.log(maxPathSum(createTree([2, -1]))); // 2
console.log(maxPathSum(createTree([-2, 1]))); // 1
console.log(maxPathSum(createTree([-2, -1]))); // -1
console.log(maxPathSum(createTree([1, 2, null, 3, null, 4, null, 5]))); // 15
console.log(maxPathSum(createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]))); // 48
console.log(maxPathSum(createTree([9, 6, -3, null, null, -6, 2, null, null, 2, null, -6, -6, -6]))); // 16

// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
