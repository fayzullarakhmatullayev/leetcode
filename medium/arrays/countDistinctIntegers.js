/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const collection = [];

  for (let num of nums) {
    collection.push(+num.toString().split('').reverse().join(''));
  }

  return new Set(nums.concat(collection)).size;
};

console.log(countDistinctIntegers([1, 13, 10, 12, 31])); // 6 [1,13,10,12,31,1,31,1,21,13]
