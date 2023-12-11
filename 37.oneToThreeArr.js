//? 有一堆整数，请把他们分成三份
//? 确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）

const arr = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90];

function oneToThreeArr(arr) {
  let res = [
    { sum: 0, arr: [] },
    { sum: 0, arr: [] },
    { sum: 0, arr: [] }
  ];

  arr = arr.slice().sort((a, b) => b - a); // 从大到小排序数组

  arr.map((item) => {
    let min = res.sort((a, b) => a.sum - b.sum)[0]; // 选出和最小的对象
    min.sum += item; // 计算和
    min.arr.push(item); // 增加对应元素
  });
  return res;
}

console.log(oneToThreeArr(arr));
