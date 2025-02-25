function pivotArray(nums: number[], pivot: number): number[] {
  const mins: number[] = [];
  const maxs: number[] = [];
  const mids: number[] = [];

  for (let num of nums) {
    if (num < pivot) {
      mins.push(num);
    } else if (num > pivot) {
      maxs.push(num);
    } else {
      mids.push(num);
    }
  }

  return [...mins, ...mids, ...maxs];
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)); // [9,5,3,10,10,12,14]
console.log(pivotArray([-3, 4, 3, 2], 2)); // [-3,2,4,3]
