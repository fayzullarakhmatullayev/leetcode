/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // nums1.splice(m);
  // nums1.push(...nums2);
  // nums1.sort((a, b) => a - b);

  let l = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  let count = 0;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[l] = nums1[i];
      i--;
    } else {
      nums1[l] = nums2[j];
      j--;
    }
    count++;
    l--;
  }

  console.log(count);
}

const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
const nums2 = [1, 2, 2];
console.log(merge(nums1, 6, nums2, 3)); // [1,2,2,3,5,6]

console.log(nums1);
