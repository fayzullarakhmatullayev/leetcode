import { createTree, TreeNode } from '../../utils';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null || subRoot === null) return false;

  function dfs(node: TreeNode | null): boolean {
    if (node === null) return false;

    if (node.val === subRoot!.val && isSameTree(node, subRoot)) {
      return true;
    }

    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
}

console.log(isSubtree(createTree([3, 4, 5, 1, 2]), createTree([4, 1, 2])));
