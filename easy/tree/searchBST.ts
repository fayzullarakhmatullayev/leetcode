import { TreeNode, createTree } from '../../utils';
function searchBST1(root: TreeNode | null, val: number): TreeNode | null {
  function dfs(node: TreeNode | null): TreeNode | null {
    if (!node) return null;

    if (node.val === val) {
      return node;
    }

    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
}

function searchBST2(root: TreeNode | null, val: number): TreeNode | null {
  let node = root;

  while (node) {
    if (node.val === val) return node;

    node = val < node.val ? node.left : node.right;
  }

  return null;
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;

  if (root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  }

  return searchBST(root.right, val);
}

console.log(searchBST(createTree([4, 2, 7, 1, 3]), 2));
