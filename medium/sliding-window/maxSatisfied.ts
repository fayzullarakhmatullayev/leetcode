function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  let baseSatisfied = 0;
  const n = customers.length;

  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) {
      baseSatisfied += customers[i];
    }
  }

  let maxExtra = 0;
  let currentExtra = 0;

  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 1) {
      currentExtra += customers[i];
    }

    if (i >= minutes) {
      if (grumpy[i - minutes] === 1) {
        currentExtra -= customers[i - minutes];
      }
    }

    maxExtra = Math.max(maxExtra, currentExtra);
  }

  return baseSatisfied + maxExtra;
}

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)); // 16
console.log(maxSatisfied([1], [0], 1)); // 1
console.log(maxSatisfied([4, 10, 10], [1, 1, 0], 2)); // 24
console.log(maxSatisfied([10, 1, 7], [0, 0, 0], 2)); // 18
