Array.prototype._some = function (callback, thisArg) {
  // 判断 callback 是否为函数
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  // 获取数组长度 等于是 arr.length
  let len = this.length;

  for (let i = 0; i < len; i++) {
    // 调用回调函数，改变this指向为thisArg
    // ! thisArg 作为回调函数内部的上下文（this 值）
    // ! 当前正在处理的元素 this[i]
    // ! 当前元素的索引 i
    // ! this 表示数组本身
    const result = callback.call(thisArg, this[i], i, this);
    if (result) {
      return true;
    }
  }
  return false;
};

// Test Case
const numbers = [5, 8, 12, 3, 17];

const result = numbers._some(function (num) {
  return num > 20;
});
console.log(result);
