/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const result = [];

  for (let i = 0; i < image.length; i++) {
    const innerResult = [];

    for (let j = image[i].length - 1; j >= 0; j--) {
      innerResult.push(Number(!image[i][j]));
    }
    result.push(innerResult);
  }

  return result;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
  ])
);

/**
 * Result:
 *
 *  [
 *    [1, 0, 0],
 *    [0, 1, 0],
 *    [1, 1, 1]
 *  ];
 *
 */
