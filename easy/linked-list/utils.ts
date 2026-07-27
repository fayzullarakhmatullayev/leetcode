export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
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

export function stringify(func: any) {
  return JSON.stringify(func);
}
