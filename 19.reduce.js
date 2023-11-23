/**
 *
 * @param {Function} fn
 * @param {*} initialValue
 * @returns
 */
Array.prototype._reduce = function (fn, initialValue) {
  const arr = Array.prototype.slice.call(this); // 其实就是创建了一个数组的副本
  let res = initialValue ? initialValue : arr[0]; // 最终累积的结果，如果没有提供初始值，将使用数组的第一个元素作为第一次迭代的当前值
  const startIndex = initialValue ? 0 : 1; // 如果没有提供初始值，将使用数组的第二个元素作为第一次迭代的当前值

  for (let i = startIndex; i < arr.length; i++) {
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
};

// Test Case
const arr = [1, 2, 3, 4, 5];

const sum = arr._reduce((pre, cur) => {
  console.log('pre:', pre);
  console.log('cur', cur);
  return pre + cur;
}, 5);
console.log(sum); // 20
