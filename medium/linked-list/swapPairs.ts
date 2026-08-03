import { createList, ListNode, stringify } from '../../utils';

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (slow) {
    slow = slow!.next;
    if (fast && fast.next) fast = fast.next.next;
  }

  return head;
}

console.log(stringify(swapPairs(createList([1, 2, 3, 4])))); // [2,1,4,3]
