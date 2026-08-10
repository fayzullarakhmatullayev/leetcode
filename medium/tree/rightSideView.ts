import { createTree, TreeNode } from '../../utils';

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];
  let head: number = 0;

  while (head < queue.length) {
    const size: number = queue.length - head;

    for (let i = 0; i < size; i++) {
      const node = queue[head++];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      if (i === size - 1) {
        result.push(node.val);
      }
    }
  }

  return result;
}

function rightSideView2(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null, depth: number): void {
    if (!node) return;

    // First node we encounter at this depth
    if (depth === result.length) {
      result.push(node.val);
    }

    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }

  dfs(root, 0);

  return result;
}

console.log(rightSideView(createTree([1, 2, 3, 4, null, null, null, 5]))); // [1,3,4,5]
