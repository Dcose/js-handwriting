// ! findIndx 返回的是满足 callback 条件的!!!索引!!!
Array.prototype._findIndex = function (callback) {
  if (typeof callback !== 'function')
    new TypeError(`${callback} is not a function`)

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i // 返回满足条件的元素索引
    }
  }
  return -1 // 没有找到满足条件的元素，返回 -1
}

// Test Case
const num = [1, 5, 8, 10, 15]

const index1 = num._findIndex((item) => item > 8)
const index2 = num._findIndex((item) => item > 20)
const index3 = num._findIndex((item) => item === 8)
const index4 = num._findIndex((item) => item === 1)
const index5 = num._findIndex((item) => item === 99)

console.log(index1) // 3
console.log(index2) // -1
console.log(index3) // 2
console.log(index4) // 0
console.log(index5) // -1
