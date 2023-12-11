/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

var throttle = function (fn, t) {
  let start = null;
  return function (...args) {
    let now = +new Date(); // save the current time
    // 1.check if it is the first invocation
    // 2.throttle handling
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
