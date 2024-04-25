function mapper(rules) {
  return function (obj) {
    const newObj = {};
    rules.forEach(rule => {
      const [oldKey, newKey, transformFn] = rule;
      newObj[newKey] = transformFn ? transformFn(obj[oldKey]) : obj[oldKey];
    });
    return newObj;
  };
}