Array.prototype.mySome = function (callback, thisArg) {
  let flag = false
  const arr = Object(this)

  if (typeof callback !== 'function') {
    throw new Error(`${callback} is not a function`)
  }
  if ([null, undefined].includes(this)) {
    throw new Error('this is null or undefined')
  }

  for (let i = 0; i < arr.length; i++) {
    const res = callback.call(thisArg, arr[i], i)
    if (res) {
      return true
    }
  }

  return flag
}

const numbers = [5, 8, 12, 3, 17]

const result = numbers.mySome(function (num) {
  return num > 10
})
console.log(result)
