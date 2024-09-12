/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const arr = [];

  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
    const sums = [];

    for (let j = 0; j < i + 1; j++) {
      arr[i].push(1);
    }

    if (i >= 2) {
      for (let j = 0; j < i; j++) {
        if (arr[i - 1][j + 1]) {
          sums.push(arr[i - 1][j] + arr[i - 1][j + 1]);
        }
      }

      arr[i] = [1, ...sums, 1];
    }
  }

  return arr;
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
 * https://leetcode.com/problems/pascals-triangle/description/
 */

/**
 *                                  1
 *                                 1 1
 *                                1 2 1
 *                               1 3 3 1
 *                              1 4 6 4 1
 */

/**
 *  - birinchi navbatda collektsiyaga yegilgan summa miqdori yegiladi;
 *  - demak bitta kollektisya ishlatilinmaydi, balki birinci kollektisya yegindilar hisoblab va qoshish uchun
 *  - va ikkinchi kollektisya oldingi hisoblangan kollektsiyani umumiy javob massiviga qishish kerak
 */

/**
 * mening tepadagi yechimim time complexity boyicha zor ammo memory juda yomon chiqdi. 
 * mana shu yechim eng optimal yechim boldi.
 * 
 * 
var generate = function(numRows) {
  const arr = [];

  for (let i = 0; i < numRows; i++) {
    arr[i] = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }

  return arr;
};

*/
