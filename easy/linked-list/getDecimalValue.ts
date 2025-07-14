function decimalValueSolution() {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function getDecimalValue(head: ListNode | null): number {
    let curr: ListNode | null = head;
    const vals: number[] = [];

    while (curr) {
      vals.push(curr.val);
      curr = curr.next;
    }

    return parseInt(vals.join(''), 2);
  }

  const node = new ListNode(1, new ListNode(0, new ListNode(1)));

  console.log(getDecimalValue(node));
}

decimalValueSolution();
