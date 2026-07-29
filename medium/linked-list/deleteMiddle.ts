import { createList, ListNode, stringify } from '../../utils';

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head?.next) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  if (prev?.next) {
    prev.next = slow?.next || null;
  }

  return head;
}

console.log(stringify(deleteMiddle(createList([1, 3, 4, 7, 1, 2, 6]))));
console.log(stringify(deleteMiddle(createList([1, 2, 3, 4]))));
console.log(stringify(deleteMiddle(createList([1]))));
