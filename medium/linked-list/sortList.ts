class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  const nums: number[] = [];
  let curr = head;

  while (curr) {
    nums.push(curr.val);
    curr = curr.next;
  }

  nums.sort((a, b) => a - b);

  let i = 0;
  curr = head;

  while (curr) {
    curr.val = nums[i];
    curr = curr.next;
    i++;
  }

  return head;
}

const values = [4, 2, 1, 3];
let head: ListNode | null = null;

for (let i = values.length - 1; i >= 0; i--) {
  head = new ListNode(values[i], head);
}

console.log('unsorted', JSON.stringify(head, null, 4));
console.log('sorted', JSON.stringify(sortList(head), null, 4));
