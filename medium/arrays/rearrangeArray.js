/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const pos = [];
  const neg = [];

  for (let num of nums) {
    num > 0 ? pos.push(num) : neg.push(num);
  }

  const answer = [];

  for (let i = 0; i < nums.length / 2; i++) {
    answer.push(pos[i], neg[i]);
  }

  return answer;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3,-2,1,-5,2,-4]
