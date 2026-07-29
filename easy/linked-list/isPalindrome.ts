import { createList, ListNode, stringify } from '../../utils';

function isPalindrome(head: ListNode | null): boolean {
  let current = head;
  const nums = [];

  while (current) {
    nums.push(current.val);
    current = current.next;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] !== nums[right]) return false;
    left++;
    right--;
  }

  return true;
}

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

function isPalindrome2(head: ListNode | null): boolean {
  let current = head;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let reversed = reverseLinkedList(slow);

  while (reversed) {
    if (current?.val !== reversed?.val) return false;
    current = current.next;
    reversed = reversed.next;
  }

  return true;
}

console.log(stringify(isPalindrome(createList([1, 2, 2, 1]))));
console.log(stringify(isPalindrome2(createList([1, 2]))));
console.log(stringify(isPalindrome2(createList([1, 2, 3, 2, 1]))));
