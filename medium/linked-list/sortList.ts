import { createList, ListNode, stringify } from '../../utils';

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

console.log('unsorted', stringify(createList([4, 2, 1, 3])));
console.log('sorted', stringify(sortList(createList([4, 2, 1, 3]))));
