/**
 *
 * @description
 * *创建一个包含这些参数作为元素的新数组
 */

const t1 = Array(5); // 长度为 2 的空数组
console.log(t1); // [ <2 empty items> ]

const t2 = Array.of(5); // 元素为 5 的数组
console.log(t2); // [5];

function _of() {
  //   return Array.from(arguments);
  return [].slice.call(arguments);
}

// Test Case
const arr1 = _of(1, 3, 4);
console.log(arr1);
