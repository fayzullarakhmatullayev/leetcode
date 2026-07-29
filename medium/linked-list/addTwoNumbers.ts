import { ListNode } from '../../utils';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const x = l1?.val ?? 0;
    const y = l2?.val ?? 0;

    const sum = x + y + carry;

    carry = Math.floor(sum / 10);

    tail.next = new ListNode(sum % 10);
    tail = tail.next;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
}
