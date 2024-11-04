var validStrings = function (n) {
  const results = [];

  function dfs(current) {
    if (current.length === n) {
      results.push(current);
      return;
    }
    if (!current || current[current.length - 1] === '1') {
      dfs(current + '0');
    }
    dfs(current + '1');
  }

  dfs('');
  return results;
};

console.log(validStrings(3)); // ["010","011","101","110","111"]
