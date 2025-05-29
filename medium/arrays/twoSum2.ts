function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;
  let l = 0;
  let r = n - 1;

  while (l < r) {
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1];
    } else if (numbers[l] + numbers[r] > target) {
      r--;
    } else {
      l++;
    }
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([2, 3, 4], 6)); // [1,3]
console.log(twoSum([-1, 0], -1)); // [1,2]
