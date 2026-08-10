import { createTree, TreeNode } from '../../utils';

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  function dfs(node: TreeNode | null): TreeNode | null {
    if (!node) return null;

    if (node === p || node === q) return node;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left && right) return node;
    return left || right;
  }

  return dfs(root);
}

const root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

const p = root!.left!.left; // node 6
const q = root!.left!.right!.right; // node 4

console.log(lowestCommonAncestor(root, p, q)); // 5

//     3
//    / \
//   5   1
//  / \ / \
// 6  2 0  8
//   / \
//  7   4
