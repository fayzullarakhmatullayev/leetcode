class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value: number): void {
    if (!this.minStack.length) {
      this.minStack.push(value);
    } else {
      const min = Math.min(value, this.minStack[this.minStack.length - 1]!);
      this.minStack.push(min);
    }

    this.stack.push(value);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]!;
  }
}

// ["MinStack","push","push","push","getMin","pop","getMin","pop","getMin","pop","push","push","push","getMin","pop","top","getMin","pop","getMin","pop"]

// [[], [0], [1], [0], [], [], [], [], [], [], [-2], [-1], [-2], [], [], [], [], [], [], []];

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
