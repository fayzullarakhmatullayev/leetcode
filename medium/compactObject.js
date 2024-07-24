// 114 tests has been passed out of 156

const compactObject = (obj) => {
  const isArray = Array.isArray(obj);
  if (isArray) {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
      if (Array.isArray(obj[i])) {
        result.push(compactObject(obj[i]));
      } else if (obj[i]) {
        result.push(obj[i]);
      }
    }
    return result;
  } else {
    let res = {};
    for (let key in obj) {
      if (obj[key]) {
        const val =
          typeof obj[key] === 'string' ||
          typeof obj[key] === 'number' ||
          typeof obj[key] === 'boolean'
            ? obj[key]
            : compactObject(obj[key]);
        res = { ...res, [key]: val };
      }
    }
    return res;
  }
};
