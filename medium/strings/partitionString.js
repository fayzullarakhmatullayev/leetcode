/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  const arr = [];
  let res = '';

  for (let i = 0; i <= s.length; i++) {
    const char = s[i];
    if (!char || res.includes(char)) {
      arr.push(res);
      res = '';
    }

    res += char;
  }

  return arr.length;
};

console.log(partitionString('abacaba')); // ("ab","a","ca","ba") output: 4
