function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function quickSort(list) {
  const n = list.length
  if (n <= 1) return list

  // 随机选择基准点
  const pivotIndex = getRandomInt(0, n - 1)
  const pivot = list[pivotIndex]

  // 分割数组
  const left = []
  const right = []

  for (let i = 1; i < n; i++) {
    if (list[i] < pivot) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }

  // 递归地对左右两个子数组进行快速排序
  return [...quickSort(left), pivot, ...quickSort(right)]
}

let case1 = quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])
let case2 = quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
let case3 = quickSort([])
console.log('%c Line:23 🍢 case1', 'color:#ea7e5c', case1)
console.log('%c Line:23 🍢 case1', 'color:#ea7e5c', case2)
console.log('%c Line:23 🍢 case1', 'color:#ea7e5c', case3)
