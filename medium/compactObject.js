const compactObject = (obj) => {
  const isArray = Array.isArray(obj);
  if (isArray) {
    return obj.filter((el) => {
      if (Array.isArray(el)) {
        return el.filter(Boolean);
      }
      return Boolean(el);
    });
  } else {
    let res = {};
    for (let key in obj) {
      if (obj[key]) {
        res = { ...res, [key]: compactObject(obj[key]) };
      }
    }
    return res;
  }
};

// console.log(compactObject([null, 0, false, 1])); // [1]
// console.log(compactObject({ a: null, b: [false, 1] })); // {"b": [1]}
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // [5, [], [16]]
