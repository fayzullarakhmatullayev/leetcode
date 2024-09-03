/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let len = arr.length;
  let result = [];

  for (let i = 0; i < len; i++) {
    const val = arr[i];

    if (val === 0) {
      result.push(0);
    }
    result.push(val);
  }

  for (let i = 0; i < len; i++) {
    arr[i] = result[i];
  }
};

const arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);

console.log(arr); // [1,0,0,2,3,0,0,4]
