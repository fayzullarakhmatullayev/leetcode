import { createTree, TreeNode } from '../../utils';

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);

  let node = root;

  while (node) {
    if (val < node.val) {
      if (!node.left) {
        node.left = new TreeNode(val);
        return root;
      }

      node = node.left;
    } else {
      if (!node.right) {
        node.right = new TreeNode(val);
        return root;
      }

      node = node.right;
    }
  }

  return root;
}

console.log(insertIntoBST(createTree([4, 2, 7, 1, 3]), 5));
