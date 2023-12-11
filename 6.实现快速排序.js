function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @description
 * 快排的原理如下:
 * 随机选取一个数组中的值作为基准值，从左至右取值与基准值对比大小。
 * 比基准值小的放数组左边，大的放右边，对比完成后将基准值和第一个比基准值大的值交换位置。
 * 然后将数组以基准值的位置分为两部分，继续递归以上操作
 */

function quickSort(list) {
  if (list.length <= 1) return list;

  // 随机选择基准点
  const pivotIndex = getRandomInt(0, list.length - 1);
  const pivot = list[pivotIndex];

  // 从数组中移除基准点
  list.splice(pivotIndex, 1);

  // 分割数组
  const left = [];
  const right = [];

  // 小于基准点 放在左侧 反之放在右侧
  for (let i = 0; i < list.length; i++) {
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }

  // 递归地对左右两个子数组进行快速排序
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test Case
const case1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const case2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const case3 = [1];

console.log(quickSort(case1));
console.log(quickSort(case2));
console.log(quickSort(case3));
