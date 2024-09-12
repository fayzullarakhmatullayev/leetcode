// var ArrayWrapper = function (nums) {};

// ArrayWrapper.prototype.valueOf = function () {};

// ArrayWrapper.prototype.toString = function () {};

class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }

  valueOf() {
    return this.arr.reduce((acc, val) => acc + val, 0);
  }

  toString() {
    return JSON.stringify(this.arr);
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);
console.log(String(obj1));
console.log(String(obj2));

// https://leetcode.com/problems/array-wrapper
