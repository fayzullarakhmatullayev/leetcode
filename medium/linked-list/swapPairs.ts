import { createList, ListNode, stringify } from '../../utils';

// This is not allowed version, we should not
// modify node values but does the job
function swapPairs2(head: ListNode | null): ListNode | null {
  let current = head;

  while (current) {
    if (current.next) {
      const temp = current.val;
      current.val = current.next.val;
      current.next.val = temp;

      current = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let current = head;

  while (current && current.next) {
    const next = current.next;

    current.next = next.next;
    next.next = current;
    prev.next = next;

    prev = current;
    current = current.next;
  }

  return dummy.next;
}

console.log(stringify(swapPairs(createList([1, 2, 3, 4])))); //[2,1,4,3]
// console.log(stringify(swapPairs(createList([1, 2, 3])))); //[2,1,3]
