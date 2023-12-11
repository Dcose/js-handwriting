Array.prototype._map = function (callback, thisArg) {
  const mappedArr = [];

  for (let i = 0; i < this.length; i++) {
    mappedArr.push(callback.call(thisArg, this[i], i, this));
  }
  return mappedArr;
};

// Test Case
const arr = [1, 2, 3, 4, 5];

const res = arr._map((item, index, arr) => item * 2);
console.log(res); // 输出: [2, 4, 6, 8, 10]
