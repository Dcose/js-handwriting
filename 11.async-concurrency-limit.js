/**
 * !关键点
 * *1. new promise 一经创建，立即执行
 * *2. 使用 Promise.resolve().then 可以把任务加到微任务队列，防止立即执行迭代方法
 * *3. 微任务处理过程中，产生的新的微任务，会在同一事件循环内，追加到微任务队列里
 * *4. 使用 race 在某个任务完成时，继续添加任务，保持任务按照最大并发数进行执行
 * *5. 任务完成后，需要从 doingTasks 中移出
 */

function limit(limit, arr, iteratorFn) {
  const tasks = []
  const doingTasks = []
  let i = 0
  const enqueue = () => {
    if (i === arr.length) Promise.resolve()
    const task = Promise.resolve().then(() => iteratorFn(arr[i++]))
    tasks.push(task)

    const doing = task.then(() =>
      doingTasks.splice(doingTasks.indexOf(doing), 1)
    )
    doingTasks.push(doing)

    const res =
      doingTasks.length >= limit ? Promise.race(doingTasks) : Promise.resolve()
    return res.then(enqueue)
  }
  return enqueue().then(() => Promise.all(tasks))
}

// Test Case
const timeout = (i) => new Promise((resolve) => setTimeout(() => resolve(i), i))
limit(2, [1000, 1000, 1000, 1000], timeout).then((res) => {
  console.log(res)
})
