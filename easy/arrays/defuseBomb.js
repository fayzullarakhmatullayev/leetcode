/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  const answer = new Array(n).fill(0);

  if (k === 0) {
    return answer;
  }

  for (let i = 0; i < n; i++) {
    let sum = 0;

    if (k > 0) {
      for (let j = 1; j <= k; j++) {
        sum += code[(i + j) % n];
      }
    } else {
      for (let j = 1; j <= -k; j++) {
        sum += code[(i - j + n) % n];
      }
    }

    answer[i] = sum;
  }

  return answer;
};

console.log(decrypt([5, 7, 1, 4], 3)); // [12,10,16,13]
console.log(decrypt([1, 2, 3, 4], 0)); // [0,0,0,0]
console.log(decrypt([2, 4, 9, 3], -2)); // [12,5,6,13]
