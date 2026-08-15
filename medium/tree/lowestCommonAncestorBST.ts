import { createTree, TreeNode } from '../../utils';

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null;
  let node: TreeNode | null = root;

  while (node) {
    if (node.val > p.val && node.val > q.val) {
      node = node.left;
    } else if (node.val < p.val && node.val < q.val) {
      node = node.right;
    } else {
      return node;
    }
  }

  return null;
}

const root = createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
const p = root!.left;
const q = root!.right;

console.log(lowestCommonAncestor(root, p, q));
