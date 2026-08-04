import { createTree, stringify, TreeNode } from '../../utils';

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
}

// BFS (Level Order Traversal)
function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0;

  const queue: TreeNode[] = [root];
  let depth = 0;
  console.log('initial❄️ ', stringify(queue));

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      console.log('node🔥 ', stringify(node));
      console.log('is left⬅️ ', !!node.left);
      if (node.left) {
        console.log('left👈 ', stringify(queue));
        queue.push(node.left);
      }
      console.log('is right➡️ ', !!node.right);
      if (node.right) {
        console.log('right👉 ', stringify(queue));
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
}

// DFS using a stack
function maxDepth3(root: TreeNode | null): number {
  if (!root) return 0;

  const stack: [TreeNode, number][] = [[root, 1]];
  let max = 0;

  while (stack.length) {
    const [node, depth] = stack.pop()!;

    max = Math.max(max, depth);

    if (node.left) {
      stack.push([node.left, depth + 1]);
    }

    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }

  return max;
}

const tree = createTree([2, null, 3, null, 4, null, 5, null, 6]);

console.log('result', maxDepth2(tree));

// console.log(stringify(maxDepth(createTree([1, null, 2])), 2));
