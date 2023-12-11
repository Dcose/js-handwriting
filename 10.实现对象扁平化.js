function objectFlat(obj = {}) {
  const res = {};
  function flat(item, preKey = '') {
    // entries: 返回数组形式返回键值对
    Object.entries(item).forEach(([key, val]) => {
      // 键名处理
      // 如果是原来的 key 就 key.key 否则就是新的 key
      const newKey = preKey ? `${preKey}.${key}` : key;
      // 值处理
      // 如果值是 object 继续递归扁平化
      if (val && typeof val === 'object') {
        flat(val, newKey);
      } else {
        res[newKey] = val;
      }
    });
  }
  flat(obj);
  return res;
}

// Test Case
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } };
console.log(objectFlat(source));

// console.log(Object.entries(source)); // [ [ 'a', { b: [Object], e: 3 } ], [ 'f', { g: 2 } ] ]
