/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = (arr, size, result = []) => {
  for (let i = 0, j = size; i < arr.length; i += size, j += size) {
    result.push(arr.slice(i, j));
  }
  return result;
};

// https://leetcode.com/problems/chunk-array/
