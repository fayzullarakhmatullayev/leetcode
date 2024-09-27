/**
 * @param {number} n
 */
class OrderedStream {
  constructor(n) {
    this.stream = new Array(n);
    this.ptr = 0;
  }

  /**
   * @param {number} idKey
   * @param {string} value
   * @return {string[]}
   */

  insert(idKey, value) {
    this.stream[idKey - 1] = value;
    let result = [];

    while (this.ptr < this.stream.length && this.stream[this.ptr] !== undefined) {
      result.push(this.stream[this.ptr]);
      this.ptr++;
    }
    return result;
  }
}

const os = new OrderedStream(5);

console.log(os.insert(3, 'ccccc'));
console.log(os.insert(1, 'aaaaa'));
console.log(os.insert(2, 'bbbbb'));
console.log(os.insert(5, 'eeeee'));
console.log(os.insert(4, 'ddddd'));

// [null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]
