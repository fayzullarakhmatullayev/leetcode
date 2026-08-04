export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createList(nums: number[]): ListNode | null {
  const node = new ListNode();
  let current = node;

  for (let num of nums) {
    const newNode = new ListNode(num);
    current.next = newNode;
    current = current.next;
  }

  return node.next;
}

export function createTree(values: (number | null)[]): TreeNode | null {
  if (!values.length || values[0] === null) return null;

  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];

  let i = 1;

  while (queue.length && i < values.length) {
    const current = queue.shift()!;

    if (values[i] !== null) {
      current.left = new TreeNode(values[i]!);
      queue.push(current.left);
    }

    i++;

    if (i < values.length && values[i] !== null) {
      current.right = new TreeNode(values[i]!);
      queue.push(current.right);
    }

    i++;
  }

  return root;
}

export function stringify(func: any, format = 0) {
  return JSON.stringify(func, null, format);
}
