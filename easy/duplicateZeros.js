/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

// This is a wrong approach, I should not create a new array, and memory usage should be O(1)
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

// This is the simpliest solution

// var duplicateZeros = function (arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] === 0) {
//       arr.pop();
//       arr.splice(i + 1, 0, 0);
//       i = i + 1;
//     }
//     i++;
//   }
//   return arr;
// };

// This is the best solution
// const duplicateZeros = (arr) => {
//   let zerosToDuplicate = 0;
//   let length = arr.length - 1;

//   // First pass: Count the zeros to be duplicated
//   for (let i = 0; i <= length - zerosToDuplicate; i++) {
//     if (arr[i] === 0) {
//       // Edge case: If there's a zero at the boundary of the array, it can't be duplicated fully
//       if (i === length - zerosToDuplicate) {
//         arr[length] = 0; // Duplicate the zero at the end
//         length -= 1;
//         break;
//       }
//       zerosToDuplicate++;
//     }
//   }

//   // Second pass: Duplicate zeros from the end of the array
//   for (let i = length - zerosToDuplicate; i >= 0; i--) {
//     if (arr[i] === 0) {
//       arr[i + zerosToDuplicate] = 0;
//       zerosToDuplicate--;
//       arr[i + zerosToDuplicate] = 0;
//     } else {
//       arr[i + zerosToDuplicate] = arr[i];
//     }
//   }
// };

const arr = [1, 0, 2, 3, 0, 4, 5, 0];
// duplicateZeros(arr);

// console.log(arr); // [1,0,0,2,3,0,0,4]

const arr1 = [0, 1, 2];
let i = 0;
while (i < arr1.length) {
  const val = arr1[i];
  if (val === 0) {
    arr1.pop();
    arr1.splice(i + 1, 0, 0);
    i++;
  }
  i++;
}

console.log(arr1);
