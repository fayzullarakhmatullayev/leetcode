/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let interpretedString = '';

  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      interpretedString += 'G';
    } else if (command[i] === '(' && command[i + 1] === ')') {
      interpretedString += 'o';
      i++;
    } else if (command[i] === '(' && command[i + 1] === 'a' && command[i + 2] === 'l') {
      interpretedString += 'al';
      i += 2;
    }
  }

  return interpretedString;
};

// https://leetcode.com/problems/goal-parser-interpretation
