/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  return details.filter((detail) => Number(detail.slice(11, 13)) > 60).length;
};

console.log(countSeniors(['7868190130M7522', '5303914400F9211', '9273338290F4010'])); // 2
