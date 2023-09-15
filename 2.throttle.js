/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

var throttle = function (fn, t) {
  let start = null;
  return function (...args) {
    let now = +new Date(); // 保存当前时间
    // 判断是不是第一次调用，以及防抖处理
    if (start === null || now - start >= t) {
      fn(...args);
      start = now;
    }
  };
};

/**
 * const log = throttle(console.log, 100);
 * log('Hello A'); // Logged immediately
 * log('Hello B'); // Ignored (within 100ms)
 * setTimeout(() => log('Hello C'), 101); // Hello C
 */
const log = throttle(console.log, 100);
log('Hello A'); // Logged immediately
log('Hello B'); // Ignored (within 100ms)
setTimeout(() => log('Hello C'), 101); // Hello C
