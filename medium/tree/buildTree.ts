import { TreeNode } from '../../utils';

// SLOW VERSION
function buildTree1(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) return null;

  const root = new TreeNode(preorder[0]);
  const index = inorder.findIndex((val: number) => val === preorder[0]);

  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

  return root;
}

// THE BEST ONE
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const inorderMap = new Map<number, number>();

  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  function build(
    preStart: number,
    preEnd: number,
    inStart: number,
    inEnd: number
  ): TreeNode | null {
    if (preStart > preEnd || inStart > inEnd) return null;

    const rootValue = preorder[preStart];
    const root = new TreeNode(rootValue);
    const rootIndex = inorderMap.get(rootValue)!;
    const leftSize = rootIndex - inStart;

    root.left = build(preStart + 1, preStart + leftSize, inStart, rootIndex - 1);

    root.right = build(preStart + leftSize + 1, preEnd, rootIndex + 1, inEnd);

    return root;
  }

  return build(0, preorder.length - 1, 0, inorder.length - 1);
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
