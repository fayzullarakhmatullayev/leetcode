/**
 * @param {number[]} nums
 * @return {number}
 */

// my implementation passed 67 / 76 tests
/**
  const longestConsecutive = function (nums) {
  const set = new Set();
  const collection = [];

  for (let num of nums) {
    set.add(num);
  }

  for (let i = Math.min(...nums); i <= nums.length; i++) {
    if (set.has(i)) {
      collection.push(i);
    }
  }

  let count = 0;
  let max = -Infinity;

  for (let i = 0; i < collection.length; i++) {
    count++;

    if (collection[i + 1] && collection[i + 1] !== collection[i] + 1) {
      max = Math.max(count, max);
      count = 0;
    }
  }

  return Math.max(count, max);
};*/

const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let maxLength = 0;

  for (let num of set.values()) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(
  longestConsecutive([-7, 2, -3, 8, 9, 0, 8, 4, -5, 8, -5, -5, 1, 6, 4]),
); // 3
