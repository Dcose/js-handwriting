function isSymmetryNum(start, end) {
  for (let i = start; i < end + 1; i++) {
    let str = String(i);
    if (str.length <= 1) continue;
    // 反转字符串 判断与原字符串是否相等
    if (str.split('').reverse().join('') === str) {
      console.log(i);
    }
  }
}

// Test Case
isSymmetryNum(1, 1000);
