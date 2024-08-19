/**
 * @param {number[]} nums
 * @return {number}
 */

// my solution
var findDuplicate = function (nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1;
  }

  for (let key in hash) {
    if (hash[key] > 1) return key;
  }
};

// solution with new Map
// var findDuplicate = function (nums) {
//   const hash = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
//   }

//   for (let [key, value] of hash) {
//     if (value > 1) return key;
//   }
// };

// best solution
// const findDuplicate = (nums) => {
//   const visited = Array(nums.length).fill(false);

//   for (let num of nums) {
//     if (!visited[num]) {
//       visited[num] = true;
//     } else {
//       return num;
//     }
//   }

//   return -1;
// };

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
