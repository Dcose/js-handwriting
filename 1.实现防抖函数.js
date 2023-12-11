const debounce = function (fn, t) {
  let timer = null; // 计时器标识符
  return function (...args) {
    if (timer) clearTimeout(timer); // 定时器存在 说明还没到定时 清除定时器
    timer = setTimeout(() => {
      fn(...args); // 执行函数
    }, t);
  };
};

// Test Case
const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
