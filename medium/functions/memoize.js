/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let hash = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in hash) return hash[key];
    hash[key] = fn(...args);
    return hash[key];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// https://leetcode.com/problems/memoize/
