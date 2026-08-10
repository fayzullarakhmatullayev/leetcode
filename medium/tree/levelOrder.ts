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

console.log(levelOrder(createTree([3, 9, 20, null, null, 15, 7])));
console.log(levelOrder(createTree([1])));
console.log(levelOrder(createTree([1, 2, 3, 4, null, null, 5])));
