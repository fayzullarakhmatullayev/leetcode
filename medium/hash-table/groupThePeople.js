/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const hash = {};
  const result = [];

  for (let i = 0; i < groupSizes.length; i++) {
    if (!hash[groupSizes[i]]) {
      hash[groupSizes[i]] = [];
    }
    hash[groupSizes[i]].push(i);
  }

  for (let key in hash) {
    for (let i = 0; i < hash[key].length; i += Number(key)) {
      result.push(hash[key].slice(i, i + Number(key)));
    }
  }

  return result;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3])); // [[5],[0,1,2],[3,4,6]]
console.log(groupThePeople([2, 1, 3, 3, 3, 2])); // [[1],[0,5],[2,3,4]]
