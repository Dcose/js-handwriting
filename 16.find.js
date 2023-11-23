// ! findIndx 返回的是满足 callback 条件的!!!值!!!
Array.prototype._find = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i] // 返回满足条件的元素
    }
  }
  return undefined // 没有找到满足条件的元素，返回 undefined
}

const tasks = [
  { id: 1, name: 'Case1' },
  { id: 2, name: 'Case2' },
  { id: 3, name: 'Case3' },
  { id: 4, name: 'Case4' }
]

const result1 = tasks._find((item) => item.id > 2)
const result2 = tasks._find((item) => item.id > 4)
const result3 = tasks._find((item) => item.id === 2)
const result4 = tasks._find((item) => item.id === 5)

console.log(result1) // { id: 3, name: 'Case3' }
console.log(result2) // undefined
console.log(result3) // { id: 2, name: 'Case2' }
console.log(result4) // undefined
