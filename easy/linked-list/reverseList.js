//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val ?? 0;
  this.next = next ?? null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let previous = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  return previous;
};

const nums = [1, 2, 3, 4, 5];

let head = new ListNode(nums[0]);
let current = head;

for (let i = 1; i < nums.length; i++) {
  current.next = new ListNode(nums[i]);
  current = current.next;
}

function displayLinkedList(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(' -> '));
}

// Call the function to display the list
displayLinkedList(head);
head = reverseList(head);
displayLinkedList(head);
