/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// my solution
var findIntersectionValues = function (nums1, nums2) {
  const map1 = createMap(nums1);
  const map2 = createMap(nums2);
  const answer1 = checkAndInsertResult(map1, map2);
  const answer2 = checkAndInsertResult(map2, map1);
  return [answer1, answer2];
};

function createMap(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  return map;
}

function checkAndInsertResult(map1, map2) {
  let sum = 0;
  for (let [key, value] of map1.entries()) {
    if (map2.has(key)) {
      sum += value;
    }
  }

  return sum;
}

/**
 *  * the best solution
 * var findIntersectionValues = function (nums1, nums2) {
    const setValue =  new Set (nums1);
    const setValue2 = new Set (nums2);
    let result1 = 0;
    let result2 = 0;
    for(let num of nums1)
        if(setValue2.has(num)){
           result1++;
        }
    for(let num of nums2)
        if(setValue.has(num)){
           result2++;
        }
    
    return [result1,result2];
  };
 * 
 */

console.log(findIntersectionValues([2, 3, 2], [1, 2])); // [2, 1]
console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])); // [3,4]
