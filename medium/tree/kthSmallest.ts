import { TreeNode, createTree } from '../../utils';

// MY SOLUTION
function kthSmallest1(root: TreeNode | null, k: number): number {
  let result = 0;
  let found = false;
  let count = 0;

  function dfs(node: TreeNode | null) {
    if (!node || found) return;

    dfs(node.left);
    if (found) return;

    count++;
    if (count === k) {
      result = node.val;
      found = true;
      return;
    }

    dfs(node.right);
  }

  dfs(root);

  return result;
}

// THE BEST SOLUTION
function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;

  function dfs(node: TreeNode | null): number | null {
    if (!node) return null;

    const left = dfs(node.left);

    if (left !== null) return left;

    count++;

    if (count === k) {
      return node.val;
    }

    return dfs(node.right);
  }

  return dfs(root)!;
}

// INORDER TRAVERSIAL OF BINARY TREE
function test(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;

    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }

  dfs(root);

  return result;
}

console.log(kthSmallest(createTree([3, 1, 4, null, 2]), 1)); // 1

// console.log(test(createTree([5, 3, 6, 2, 4, null, null, 1])));
