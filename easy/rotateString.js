/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  // my solution but not bad at all
  let left = 0;
  let right = goal.length - 1;

  while (left < right) {
    let slice1 = goal.slice(0, right);
    let slice2 = goal.slice(right);
    const word1 = slice2 + slice1;

    if (word1 === s) {
      return true;
    }

    let slice3 = goal.slice(0, left);
    let slice4 = goal.slice(left);
    let word2 = slice4 + slice3;

    if (word2 === s) {
      return true;
    }

    left++;
    right--;
  }

  return false;
  // best solution
  return (s + s).includes(goal);
};

console.log(rotateString('abcde', 'cdeab')); // true
console.log(rotateString('abcde', 'abced')); // false
