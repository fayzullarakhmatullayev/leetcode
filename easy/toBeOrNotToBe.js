var expect = function (val) {
  return {
    toBe(testVal) {
      if (val !== testVal) throw Error('Not Equal');
      return true;
    },
    notToBe(testVal) {
      if (val === testVal) throw Error('Equal');
      return true;
    }
  };
};

// https://leetcode.com/problems/to-be-or-not-to-be/
