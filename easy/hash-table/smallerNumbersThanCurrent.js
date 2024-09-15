/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[j] < nums[i]) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]

/**
 * Explanation:
 * For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
 * For nums[1]=1 does not exist any smaller number than it.
 * For nums[2]=2 there exist one smaller number than it (1).
 * For nums[3]=2 there exist one smaller number than it (1).
 * For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
 *
 */

// this is the best solution

// var smallerNumbersThanCurrent = function (nums) {

//   const sortedNums = [...nums].sort((a, b) => a - b);

//   const map = new Map();

//   sortedNums.forEach((num, index) => {
//     if (!map.has(num)) {
//       map.set(num, index);
//     }
//   });

//   return nums.map((num) => map.get(num));
// };
