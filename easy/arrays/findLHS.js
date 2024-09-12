/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let hash = new Map();
  let maxLength = 0;

  for (let num of nums) {
    hash.set(num, (hash.get(num) || 0) + 1);
  }

  for (let key of hash.keys()) {
    if (hash.has(key + 1)) {
      let foundLength = hash.get(key + 1) + hash.get(key);
      maxLength = Math.max(maxLength, foundLength);
    }
  }

  return maxLength;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0
