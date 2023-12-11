function objectFlat(obj = {}) {
  const res = {}
  function flat(item, preKey = '') {
    // entries: returns an array of key-value pair pairs
    Object.entries(item)
      // iterate and destructure
      .forEach(([key, val]) => {
        // key name processing
        const newKey = preKey ? `${preKey}.${key}` : key
        // value processing
        if (val && typeof val === 'object') {
          flat(val, newKey)
        } else {
          res[newKey] = val
        }
      })
  }
  flat(obj)
  return res
}

// Test Case
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source))
