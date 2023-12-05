/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

const debounce = function (fn, t) {
  let timer = null; // timer identifier
  return function (...args) {
    if (timer) clearTimeout(timer); // check if a timer is running, and if it is, clear it
    timer = setTimeout(() => {
      fn(...args); // the timer has exceeded 't', proceed with the execution
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
