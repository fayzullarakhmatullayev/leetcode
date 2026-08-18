function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const b = stack.pop()!;
      const a = stack.pop()!;

      if (token === '+') stack.push(a + b);
      if (token === '-') stack.push(a - b);
      if (token === '*') stack.push(a * b);
      if (token === '/') stack.push(Math.trunc(a / b));
    } else {
      stack.push(Number(token));
    }
    console.log(token, stack);
  }

  return stack[0];
}

console.log(evalRPN(['1', '2', '+', '3', '*', '4', '-']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
