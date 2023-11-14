/**
 *
 * @param {Array} list
 * @returns {Array}
 *
 * 冒泡排序的原理如下:
 * 从第一个元素开始，把当前元素和下一个索引元素进行比较。
 * 如果当前元素大，那么就交换位置，重复操作直到比较到最后一个元素，那么此时最后一个元素就是该数组中最大的数。
 * 下一轮重复以上操作，但是此时最后一个元素已经是最大数了，
 * 所以不需要再比较最后一个元素，只需要比较到 length - 1 的位置。
 */

function bubbleSort(list) {
  let n = list.length
  if (!n) return [] // array length is zero

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j + 1]
        list[j + 1] = list[j]
        list[j] = temp
      }
    }
  }
  return list
}

let case1 = bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])
let case2 = bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
let case3 = bubbleSort([])

console.log(case1)
console.log(case2)
console.log(case3)
