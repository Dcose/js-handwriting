function sum(num) {
  if (num === 1) return 1; // 递归停止的条件
  return num + sum(num - 1);
}

// Test Case
console.log(sum(100)); // 5050
