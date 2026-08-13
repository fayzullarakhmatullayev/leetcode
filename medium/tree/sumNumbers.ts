import { createTree, stringify, TreeNode } from '../../utils';

function sumNumbers(root: TreeNode | null): number {
  let sum = 0;

  function dfs(node: TreeNode | null, current: number): void {
    if (!node) return;

    current = current * 10 + node.val;

    if (!node.left && !node.right) {
      sum += current;
    }

    dfs(node.left, current);
    dfs(node.right, current);
  }

  dfs(root, 0);

  return sum;
}

console.log(sumNumbers(createTree([1, 2, 3]))); // 25
console.log(sumNumbers(createTree([4, 9, 0, 5, 1]))); // 1026

// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.

// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.
