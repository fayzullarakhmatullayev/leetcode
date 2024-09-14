const letterCombinations = function (digits) {
  if (!digits.length) return [];

  const digitToLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  let result = [];

  const backtrack = (index, currentCombination) => {
    if (index === digits.length) {
      result.push(currentCombination.join(''));
      return;
    }

    let letters = digitToLetters[digits[index]];
    for (let letter of letters) {
      currentCombination.push(letter);
      backtrack(index + 1, currentCombination);
      currentCombination.pop();
    }
  };

  backtrack(0, []);
  return result;
};

console.log(letterCombinations('23'));
console.log(letterCombinations('2'));
console.log(letterCombinations('499'));
