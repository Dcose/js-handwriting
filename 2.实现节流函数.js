const throttle = function (fn, t) {
  let start = null;
  return function (...args) {
    let now = +new Date(); // 保存当前时间
    // 1.检查是否第一次执行
    // 2.节流处理
    if (start === null || now - start >= t) {
      fn(...args);
      start = now;
    }
  };
};

// Test Case
const log = throttle(console.log, 100);
log('Hello A'); // Logged immediately
log('Hello B'); // Ignored (within 100ms)
setTimeout(() => log('Hello C'), 101); // Hello C
