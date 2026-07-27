import { createList, ListNode } from './utils';

function middleNode(head: ListNode | null): ListNode | null {
  let length = 0;
  let current = head;

  while (current?.next) {
    current = current.next;
    length++;
  }

  current = head;
  let mid = Math.ceil(length / 2);
  length = 0;

  while (length < mid) {
    current = current?.next || null;
    length++;
  }

  return current;
}

// THE BEST SOLUTION
function middleNode2(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

console.log(JSON.stringify(middleNode(createList([1, 2, 3, 4, 5])))); // 3
console.log(JSON.stringify(middleNode2(createList([1, 2, 3, 4, 5, 6])))); // 3
