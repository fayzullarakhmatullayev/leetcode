import { ListNode } from '../../utils';

function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }

  return false;
}
