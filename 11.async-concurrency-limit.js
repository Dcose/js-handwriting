/**
 * !关键点
 * *1. new promise 一经创建，立即执行
 * *2. 使用 Promise.resolve().then 可以把任务加到微任务队列，防止立即执行迭代方法
 * *3. 微任务处理过程中，产生的新的微任务，会在同一事件循环内，追加到微任务队列里
 * *4. 使用 race 在某个任务完成时，继续添加任务，保持任务按照最大并发数进行执行
 * *5. 任务完成后，需要从 doingTasks 中移出
 */

/**
 *
 * @param {Number} count // 同时执行的最大任务数
 * @param {Array} array // 执行的任务的数组
 * @param {*} iterateFunc // 用来处理数组中每个元素的函数
 * @returns
 */
function limit(count, array, iterateFunc) {
  const tasks = [];
  const doingTasks = [];
  let i = 0;

  const enqueue = () => {
    // 如果任务都已处理完毕，则解析Promise并退出
    if (i === array.length) {
      return Promise.resolve();
    }

    // 使用 iteratorFn 创建一个任务Promise，并将其推送到tasks数组中
    const task = Promise.resolve().then(() => iterateFunc(array[i++]));
    tasks.push(task);

    // 一旦任务完成，将其从doingTasks数组中移除
    const doing = task.then(() =>
      doingTasks.splice(doingTasks.indexOf(doing), 1)
    );

    // 还未完成的任务就会被推入doingTasks中
    doingTasks.push(doing);

    // 根据限制条件继续执行任务或等待任务完成后继续执行
    const res =
      doingTasks.length >= count ? Promise.race(doingTasks) : Promise.resolve();

    // 递归调用 enqueue 函数以处理下一个任务
    return res.then(enqueue);
  };

  // 通过 Promise.all 返回所有任务的结果
  return enqueue().then(() => Promise.all(tasks));
}

// Test Case
const timeout = (i) =>
  new Promise((resolve) => setTimeout(() => resolve(i), i));

limit(1, [1, 2, 3, 4], timeout).then((res) => {
  console.log(res);
});
