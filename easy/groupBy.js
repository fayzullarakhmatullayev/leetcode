/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let hash = {};

  for (let i = 0; i < this.length; i++) {
    let value = this[i];
    let key = fn(value);

    if (key in hash) {
      hash[key].push(this[i]);
    } else {
      hash[key] = [this[i]];
    }
  }

  return hash;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// https://leetcode.com/problems/group-by/
