Array.prototype._forEach = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    typeof callback == 'function' && callback.call(thisArg, this[i], i);
  }
};

const arr = [1, 2, 3, 4];

arr._forEach((item, index) => {
  console.log('item: ', item);
  console.log('index: ', index);
});
