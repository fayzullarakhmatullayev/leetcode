const compactObject = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(compactObject).filter(Boolean);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const compactedValue = compactObject(obj[key]);
      if (Boolean(compactedValue)) {
        acc[key] = compactedValue;
      }
      return acc;
    }, {});
  } else {
    return obj;
  }
};
