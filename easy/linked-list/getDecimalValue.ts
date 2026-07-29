import { createList, ListNode } from '../../utils';

function getDecimalValue(head: ListNode | null): number {
  let curr: ListNode | null = head;
  const vals: number[] = [];

  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }

  return parseInt(vals.join(''), 2);
}

console.log(getDecimalValue(createList([1, 0, 1])));
