function minLength(s) {
  const stack = [];

  for (const char of s) {
    if (stack.length > 0) {
      const top = stack[stack.length - 1];

      // Remove "AB"
      if (top === 'A' && char === 'B') {
        stack.pop();
        continue;
      }

      // Remove "CD"
      if (top === 'C' && char === 'D') {
        stack.pop();
        continue;
      }
    }

    stack.push(char);
  }

  return stack.length;
}

console.log(minLength('ABFCACDB')); // 2
