/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let maxLength = 0; // Store the maximum mountain length
  const n = arr.length;

  for (let i = 1; i < n - 1; i++) {
    // Check if arr[i] is a peak
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      // Expand left and right from the peak
      let left = i - 1;
      let right = i + 1;

      // Move left pointer while the sequence is strictly increasing
      while (left > 0 && arr[left] > arr[left - 1]) {
        left--;
      }

      // Move right pointer while the sequence is strictly decreasing
      while (right < n - 1 && arr[right] > arr[right + 1]) {
        right++;
      }

      // Calculate the mountain length and update maxLength
      const currentLength = right - left + 1;
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // Output: 5
console.log(longestMountain([7, 4, 8])); // Output: 0
