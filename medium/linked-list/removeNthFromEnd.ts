import { createList, ListNode, stringify } from '../../utils';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next!;
  }

  if (length === n) {
    return head.next;
  }

  current = head;
  let steps = length - n - 1;

  while (steps > 0) {
    current = current.next!;
    steps--;
  }

  current.next = current.next!.next;

  return head;
}

// THE BEST ONE
function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);

  let slow = dummy;
  let fast = dummy;

  while (n-- >= 0) {
    fast = fast!.next!;
  }

  while (fast) {
    slow = slow.next!;
    fast = fast.next!;
  }

  slow.next = slow.next!.next;

  return dummy.next;
}

console.log(stringify(removeNthFromEnd(createList([1, 2, 3, 4, 5]), 2))); // [1,2,3,5]
console.log(stringify(removeNthFromEnd2(createList([1]), 1))); // [1,2,3,5]
