/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let temp = init;

  return {
    increment() {
      return (temp += 1);
    },
    decrement() {
      return (temp -= 1);
    },
    reset() {
      temp = init;
      return init;
    }
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// https://leetcode.com/problems/counter-ii/
