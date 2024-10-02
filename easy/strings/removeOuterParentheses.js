function removeOuterParentheses(S) {
  let result = '';
  let openCount = 0;

  for (let char of S) {
    if (char === '(') {
      if (openCount > 0) {
        result += char;
      }
      openCount++;
    } else {
      openCount--;

      if (openCount > 0) {
        result += char;
      }
    }
  }

  return result;
}

console.log(removeOuterParentheses('(()())(())')); // "()()()"

/**
 * hint:- it can be solved without stack
  whenever you encounter a first '(' remove it and when ct of '(' == ct of ')' then remove ')' again if you encounter '(' then you remove it. as it is given balanced parentheses already so after removing ')' you will always find next element is '(' and it will be again first for next consecutive sequence..
 * 
 */
