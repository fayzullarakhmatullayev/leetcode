/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const answer = [];

  for (let num of nums) {
    if (num > 9) {
      const str = num.toString();
      for (let s of str) {
        answer.push(parseInt(s));
      }
    } else {
      answer.push(num);
    }
  }

  return answer;
};

console.log(separateDigits([13, 25, 83, 77])); // [1,3,2,5,8,3,7,7]
console.log(separateDigits([7, 1, 3, 9])); // [7,1,3,9]
