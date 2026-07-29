import { stringify, createList, ListNode } from '../../utils';

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;
  let current = head;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return dummy.next;
}

console.log('result: ', stringify(removeElements(createList([1, 2, 6, 3, 4, 5, 6]), 6))); // [1,2,3,4,5]
console.log('result:', stringify(removeElements(createList([6, 2, 6, 3, 6]), 6))); // [1,2,3,4,5]
console.log('result: ', stringify(removeElements(createList([7, 7, 7, 7, 7]), 7))); // [1,2,3,4,5]
