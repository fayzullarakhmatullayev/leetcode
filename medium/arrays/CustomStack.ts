class CustomStack {
  stack: Array<number>;
  size: number;

  constructor(maxSize: number) {
    this.stack = Array(maxSize);
    this.size = 0;
  }

  push(x: number): void {
    if (this.size < this.stack.length) {
      this.stack[this.size] = x;
      this.size++;
    }
  }

  pop(): number {
    if (this.size > 0) {
      this.size--;
      const top = this.stack[this.size];
      this.stack.splice(this.size, 0);
      return top;
    }
    return -1;
  }

  increment(k: number, val: number): void {
    const len = this.size >= k ? k : this.size;
    for (let i = 0; i < len; i++) {
      this.stack[i] += val;
    }
  }
}

const stk = new CustomStack(3);
stk.push(1);
stk.push(2);
console.log(stk.pop());
stk.push(2);
stk.push(3);
stk.push(4);
stk.increment(5, 100);
stk.increment(2, 100);
// console.log(stk.pop());
// console.log(stk.pop());
// console.log(stk.pop());
// console.log(stk.pop());
console.log(stk.stack);

/**
 * 
 * 
  Input
  ["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
  [[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]

  Output
  [null,null,null,2,null,null,null,null,null,103,202,201,-1]
  
  Explanation
  CustomStack stk = new CustomStack(3); // Stack is Empty []
  stk.push(1);                          // stack becomes [1]
  stk.push(2);                          // stack becomes [1, 2]
  stk.pop();                            // return 2 --> Return top of the stack 2, stack becomes [1]
  stk.push(2);                          // stack becomes [1, 2]
  stk.push(3);                          // stack becomes [1, 2, 3]
  stk.push(4);                          // stack still [1, 2, 3], Do not add another elements as size is 4
  stk.increment(5, 100);                // stack becomes [101, 102, 103]
  stk.increment(2, 100);                // stack becomes [201, 202, 103]
  stk.pop();                            // return 103 --> Return top of the stack 103, stack becomes [201, 202]
  stk.pop();                            // return 202 --> Return top of the stack 202, stack becomes [201]
  stk.pop();                            // return 201 --> Return top of the stack 201, stack becomes []
  stk.pop();                            // return -1 --> Stack is empty return -1.
 * 
 */
