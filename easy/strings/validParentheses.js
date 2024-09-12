/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in pairs) {
      stack.push(char); // Push opening brackets onto the stack
    } else {
      // Check if the closing bracket matches the last opening bracket
      const lastOpeningBracket = stack.pop();
      if (!lastOpeningBracket || pairs[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets were matched
  return stack.length === 0;
};

// https://leetcode.com/problems/valid-parentheses
