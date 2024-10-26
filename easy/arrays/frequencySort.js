/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const answer = [];

  for (let [key, val] of map.entries()) {
    answer.push(Array(val).fill(key));
  }

  return answer
    .sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      return b[0] - a[0];
    })
    .flat();
};

console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1,3,3,2,2]
