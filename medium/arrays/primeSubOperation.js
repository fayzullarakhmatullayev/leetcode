/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const primes = [];
  for (let i = 2; i < 1000; i++) {
    if (isPrime(i)) primes.push(i);
  }

  let prev = 0;

  for (let num of nums) {
    let modified = num;
    for (let prime of primes) {
      if (num - prime > prev) {
        modified = num - prime;
      } else {
        break;
      }
    }
    if (modified <= prev) return false;
    prev = modified;
  }
  return true;
};

console.log(primeSubOperation([4, 9, 6, 10])); // true this shoudl be true

/**
 *  Input: nums = [4,9,6,10]
    Output: true
    Explanation: In the first operation: Pick i = 0 and p = 3, and then subtract 3 from nums[0], so that nums becomes [1,9,6,10].
    In the second operation: i = 1, p = 7, subtract 7 from nums[1], so nums becomes equal to [1,2,6,10].
    After the second operation, nums is sorted in strictly increasing order, so the answer is true.
 * 
 * 
 */
