/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // const n = nums.length - 1;

  // for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n - i + 1; j++) {
  //         if (nums[j] > nums[j + 1]) {
  //             [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
  //         }
  //     }
  // }

  let count: number[] = [0, 0, 0];

  for (let num of nums) {
    count[num]++;
  }

  let idx = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      nums[idx++] = i;
      count[i]--;
    }
  }
}

const nums = [2, 0, 2, 1, 1, 0]; // [ ]
sortColors(nums);
console.log(nums);
