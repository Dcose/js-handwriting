function randomUniqueArr(len, min, max) {
  if (max - min < len) return null; // 检查数组长度是否符合

  const hash = [];
  while (hash.length < len) {
    const num = Math.floor(Math.random() * (max - min) + min); // 生成随机数
    // if (num < min) continue; // 生成数小于最小值 跳过
    if (hash.indexOf(num) === -1) hash.push(num); // 数组中不存在 就 push 进数组
  }
  return hash;
}

// Test Case
console.log(randomUniqueArr(20, 10, 31));
console.log(randomUniqueArr(8, 10, 15)); // null
