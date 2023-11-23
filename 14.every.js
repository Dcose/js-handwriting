Array.prototype.myEvery = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`)
  }

  let len = this.length

  for (let i = 0; i < len; i++) {
    let result = callback.call(thisArg, this[i], i, this)
    if (!result) {
      return false
    }
  }
  return true
}

// Test Case
const numbers = [5, 8, 12, 3, 17]

const result = numbers.myEvery(function (num) {
  return num > 2
})
console.log(result)

console.log(!true)
