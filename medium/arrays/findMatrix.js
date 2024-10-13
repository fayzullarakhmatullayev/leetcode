/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const map = new Map();
  let max = 0;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    max = Math.max(map.get(num), max);
  }

  const answer = [];

  for (let i = 0; i < max; i++) {
    const subArr = [];

    for (let key of map.keys()) {
      if (map.get(key) > 0) {
        subArr.push(key);
        map.set(key, map.get(key) - 1);
      }

      if (map.get(key) === 0) {
        map.delete(key);
      }
    }

    answer.push(subArr);
  }

  return answer;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1])); // [[1,3,4,2],[1,3],[1]]
// console.log(findMatrix([1, 2, 3, 4])); // [[1, 2, 3, 4]]
// console.log(findMatrix([10, 6, 5, 1, 9, 10, 8, 2, 2, 2])); // [[10, 6, 5, 1, 9, 8, 2], [10, 2], [2]];
