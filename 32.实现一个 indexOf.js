const str = 'cheese';

console.log(str.indexOf('ee')); // 2
console.log(str.indexOf('h')); // 1
console.log(str.indexOf('se')); // 4

String.prototype._indexOf = function (serachvalue, start = 0) {
  if (typeof serachvalue !== 'string') throw TypeError('is not string');
  if (start < 0 || start > this.length) throw TypeError(start);

  for (let index = start; index < this.length; index++) {
    // 匹配第一个字符
    if (this[index] === serachvalue[0]) {
      let len = serachvalue.length;
      let i = 0;
      // 匹配后续字符
      while (i < len && this[index + i] === serachvalue[i]) {
        i++;
      }
      if (i === len) return index;
    }
  }
};

// Test Case
console.log(str._indexOf('ee')); // 2
console.log(str._indexOf('h')); // 1
console.log(str._indexOf('se')); // 4
