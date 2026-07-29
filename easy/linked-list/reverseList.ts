import { createList, ListNode, stringify } from '../../utils';

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current) {
    const newNode = current.next;
    current.next = prev;
    prev = current;
    current = newNode;
  }
  return prev;
}

console.log(stringify(reverseLinkedList(createList([1, 2, 3, 4, 5]))));
