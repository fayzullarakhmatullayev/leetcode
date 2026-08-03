import { createList, ListNode, stringify } from '../../utils';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === headB) return headA;

  let listA: ListNode | null = headA;
  let listB: ListNode | null = headB;

  let lenA = 0;
  let lenB = 0;

  while (listA) {
    lenA++;
    listA = listA.next;
  }

  while (listB) {
    lenB++;
    listB = listB.next;
  }

  listA = headA;
  listB = headB;

  while (lenA > 0 || lenB > 0) {
    if (lenA > lenB) {
      listA = listA?.next || null;
      lenA--;
    } else {
      listB = listB?.next || null;
      lenB--;
    }

    if (listA === listB) {
      return listA || listB;
    }
  }

  return null;
}

// THE BEST SOLUTION
function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
}

const intersectionList = createList([8, 4, 5]);

const headA = new ListNode(4, new ListNode(1, intersectionList));
const headB = new ListNode(5, new ListNode(6, new ListNode(1, intersectionList)));

console.log(stringify(getIntersectionNode(headA, headB)));
