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

console.log(stringify(invertTree(createTree([4, 2, 7, 1, 3, 6, 9])), 1)); //[4,7,2,9,6,3,1];
