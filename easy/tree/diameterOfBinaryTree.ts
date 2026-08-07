import { createTree, TreeNode } from '../../utils';

const depth = new Map<TreeNode, number>();

function maxDepth(node: TreeNode | null): number {
  if (!node) return 0;

  if (depth.has(node)) return depth.get(node)!;

  const result = 1 + Math.max(maxDepth(node.left), maxDepth(node.right));

  depth.set(node, result);

  return result;
}

function diameterOfBinaryTree1(root: TreeNode | null): number {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  const maxLeft = diameterOfBinaryTree1(root.left);
  const maxRight = diameterOfBinaryTree1(root.right);

  return Math.max(maxLeft, maxRight, left + right);
}

// THE BEST SOLUTION
function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function dfs(root: TreeNode | null): number {
    if (!root) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return diameter;
}

console.log(diameterOfBinaryTree(createTree([1, 2, 3, 4, 5])));
console.log(diameterOfBinaryTree(createTree([1, 2])));

const long1 = [4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null];
const long2 = [null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2];

console.log(diameterOfBinaryTree(createTree(long1.concat(long2))));
