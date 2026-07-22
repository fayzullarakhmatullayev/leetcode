class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// class List {
//   head: ListNode | null;
//   length: number;

//   constructor(head?: ListNode) {
//     this.head = head || null;
//     let count = 0;
//     let current = this.head;

//     while (current) {
//       count++;
//       current = current.next;
//     }

//     this.length = count;
//   }

//   add(val: number) {
//     const newNode = new ListNode(val);

//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }

//       current.next = newNode;
//     }

//     this.length++;
//   }
// }

// function createList(nums: number[]) {
//   const list = new List();

//   for (let num of nums) {
//     list.add(num);
//   }

//   return list.head;
// }

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   const dummy = new ListNode();
//   let tail = dummy;
//   let carry = 0;

//   while (l1 || l2 || carry) {
//     const x = l1?.val ?? 0;
//     const y = l2?.val ?? 0;

//     const sum = x + y + carry;

//     carry = Math.floor(sum / 10);

//     tail.next = new ListNode(sum % 10);
//     tail = tail.next;

//     l1 = l1?.next ?? null;
//     l2 = l2?.next ?? null;
//   }

//   return dummy.next;
// }

// console.log(
//   JSON.stringify(
//     addTwoNumbers(createList([9, 9, 9, 9, 9, 9, 9]), createList([9, 9, 9, 9])),
//     null,
//     2
//   )
// ); // [8,9,9,9,0,0,0,1]

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
