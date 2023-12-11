Array.prototype._filter = function (callback, thisArg) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.apply(thisArg, [this[i], i, this])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// Test Case
const arr = [1, 2, 3, 4, 5];
const res = arr._filter((item) => item % 2 === 0);
console.log(res);
