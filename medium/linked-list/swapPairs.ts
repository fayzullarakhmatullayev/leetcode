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

  while (prev.next && prev.next.next) {
    // define pointers
    const first = prev.next;
    const second = first.next;
    const nextPair = second!.next;

    // Swap
    prev.next = second;
    second!.next = first;
    first.next = nextPair;

    // move next pair
    prev = first;
  }

  return dummy.next;
}

console.log(stringify(swapPairs(createList([1, 2, 3, 4])))); //[2,1,4,3]
// console.log(stringify(swapPairs(createList([1, 2, 3])))); //[2,1,3]
