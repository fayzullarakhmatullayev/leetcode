import { createTree, stringify, TreeNode } from '../../utils';

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  if (root.left?.val !== root.right?.val) return false;

  return isSameTree(root.right, invertTree(root.left));
}

// THE BEST
function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  if (left.val !== right.val) return false;

  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

function isSymmetric2(root: TreeNode | null): boolean {
  if (!root) return true;

  return isMirror(root.left, root.right);
}

console.log(isSymmetric(createTree([1, 2, 2, 3, 4, 4, 3]))); // true
console.log(isSymmetric(createTree([1, 2, 2, null, 3, null, 3]))); // false
