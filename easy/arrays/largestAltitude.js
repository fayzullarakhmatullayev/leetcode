/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitude = 0;
  let maxNum = 0;

  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    maxNum = Math.max(altitude, maxNum);
  }

  return maxNum;
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
// [0,-5,-4,1,1,-6]
