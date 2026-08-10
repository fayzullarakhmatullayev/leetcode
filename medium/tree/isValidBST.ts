import { createTree, TreeNode } from '../../utils';

function isValidBST(root: TreeNode | null, min = -Infinity, max = Infinity): boolean {
  if (!root) return true;

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

console.log(isValidBST(createTree([2, 1, 3]))); // true
console.log(isValidBST(createTree([5, 1, 4, null, null, 3, 6]))); // false
console.log(isValidBST(createTree([0, -1]))); // true
