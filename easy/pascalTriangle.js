/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let i = 1; i <= numRows; i++) {
    let sums = [];

    for (let j = 1; j <= i; j++) {
      sums.push(1);
    }

    result.push(sums);
  }

  for (let i = 0; i < result.length; i++) {}

  return result;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

/**
 * Ramsda korinib turganidek birinchi navbatda masalan input 5 boladingan bolsa
 * 5 marotaba iterate qilinadi birinchi loopda va korinib turganidek qandaydir
 * har bir sonni orta qismini topish kerak. Yoki boshi va ohiri bir bolishi kerak
 * va qolgan qismlari tepadagi sonlarning yegindisi array korinishida push
 * qilinib boshi va ohirini 1 korinishida saqlsh kerak...
 *
 *
 *
 */
