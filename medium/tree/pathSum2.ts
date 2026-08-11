import { createTree, TreeNode } from '../../utils';

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];

  function dfs(root: TreeNode | null, targetSum: number, subArr: number[]): void {
    if (!root) return;

    targetSum -= root.val;
    subArr.push(root.val);

    if (!root.left && !root.right && targetSum === 0) {
      result.push([...subArr]);
    }

    dfs(root.left, targetSum, subArr);
    dfs(root.right, targetSum, subArr);

    subArr.pop();
  }

  dfs(root, targetSum, []);

  return result;
}

console.log(pathSum(createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)); // [[5,4,11,2],[5,8,4,5]]
console.log(pathSum(createTree([1, 2, 3]), 5)); // [[5,4,11,2],[5,8,4,5]]
