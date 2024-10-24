/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let answer = [];
  let left = 0;
  let right = s.length;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === 'I') {
      answer.push(left);
      left++;
    } else {
      answer.push(right);
      right--;
    }
  }

  return answer;
};

console.log(diStringMatch('IDID')); // [0,4,1,3,2]
