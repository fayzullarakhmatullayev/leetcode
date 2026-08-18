function isValidParenthes(s: string): boolean {
  const map: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const stack: string[] = [];

  for (let char of s) {
    if (char in map) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (!last || map[last] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(isValidParenthes('()'));
// console.log(isValidParenthes('()[]{}'));
// console.log(isValidParenthes('(]'));
console.log(isValidParenthes('([])'));
// console.log(isValidParenthes('([)]'));
