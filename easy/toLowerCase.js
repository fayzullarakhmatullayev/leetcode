/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return s.toLowerCase();
};

const isUppercase = (s) => {
  return /[A-Z]$/g.test(s);
};
