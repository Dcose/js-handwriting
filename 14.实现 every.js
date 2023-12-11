Array.prototype._every = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  let len = this.length;

  for (let i = 0; i < len; i++) {
    let result = callback.call(thisArg, this[i], i, this);
    if (!result) {
      return false;
    }
  }
  return true;
};

// Test Case
const numbers = [5, 8, 12, 3, 17];

const result1 = numbers._every(function (num) {
  return num > 2;
});

const result2 = numbers._every(function (num) {
  return num > 20;
});

console.log(result1);
console.log(result2);
