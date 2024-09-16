/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  const splitted = date.split('-');

  for (let i = 0; i < splitted.length; i++) {
    splitted[i] = Number(splitted[i]).toString(2);
  }

  return splitted.join('-');
};

console.log(convertDateToBinary('2080-02-29'));
