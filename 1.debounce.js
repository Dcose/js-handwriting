/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

var debounce = function (fn, t) {
  let timer = null; // 计时器标识符
  return function (...args) {
    if (timer) clearTimeout(timer); // 判断是否在计时，存在就清除
    timer = setTimeout(() => {
      fn(...args); // 到这里说明计时已经大于 t 了，直接执行
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
