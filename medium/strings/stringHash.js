function stringHash(s, k) {
  let n = s.length;
  let result = '';

  for (let i = 0; i < n; i += k) {
    let sum = 0;

    for (let j = 0; j < k; j++) {
      sum += s.charCodeAt(i + j) - 'a'.charCodeAt(0);
    }

    let hashedChar = String.fromCharCode((sum % 26) + 'a'.charCodeAt(0));
    result += hashedChar;
  }

  return result;
}

console.log(stringHash('abcd', 2)); // bf
console.log(stringHash('mxz', 3)); // i
