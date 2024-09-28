/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let depth = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++;
    }

    if (s[i] === ')') {
      count--;
    }

    depth = Math.max(count, depth);
  }

  return depth;
};

console.log(maxDepth('(1+(2*3)+((8)/4))+1')); // 3
// console.log(maxDepth('(1)+((2))+(((3)))')); // 3
// console.log(maxDepth('()(())((()()))')); // 3
// console.log(
//   maxDepth(
//     '73428681((-7-2/((76+575/0767-+(/1((-1(/0/2257))(6461-)()049((()+9(6)/6047))7872*9807)()4)9)0-+)()*))'
//   )
// ); // 9
