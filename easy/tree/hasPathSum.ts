import { createTree, stringify, TreeNode } from '../../utils';

// BFS version but worse
function hasPathSum1(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const queue: [TreeNode, number][] = [[root, 0]];

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let [node, currentSum] = queue.shift()!;

      currentSum += node.val;

      if (currentSum === targetSum && !node.left && !node.right) {
        return true;
      }

      if (node?.left) {
        queue.push([node.left, currentSum]);
      }

      if (node?.right) {
        queue.push([node.right, currentSum]);
      }
    }
  }

  return false;
}

// THE BEST SOLUTION
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  targetSum -= root.val;

  if (!root.left && !root.right) {
    return targetSum === 0;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

console.log(hasPathSum(createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)); // true
console.log(hasPathSum(createTree([1, 2]), 1)); // false
