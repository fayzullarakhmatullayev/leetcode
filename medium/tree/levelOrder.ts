import { createTree, TreeNode } from '../../utils';

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  let head: number = 0;

  while (head < queue.length) {
    const size: number = queue.length - head;
    const level: number[] = [];

    for (let i = 0; i < size; i++) {
      const node = queue[head++];

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (level.length > 0) result.push(level);
  }

  return result;
}

function levelOrder2(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];

  function dfs(node: TreeNode | null, depth: number): void {
    if (!node) return;

    if (!result[depth]) {
      result[depth] = [];
    }

    result[depth].push(node.val);

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return result;
}

console.log(levelOrder(createTree([3, 9, 20, null, null, 15, 7])));
console.log(levelOrder(createTree([1])));
console.log(levelOrder(createTree([1, 2, 3, 4, null, null, 5])));
