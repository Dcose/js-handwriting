// *BASE

// 1.通过 new 实例化
// !2.创建新 Promise 时需传入执行器（executor）函数作为参数，否则报错
let p = new Promise(() => {})
console.log(p) // Promise { <pending> }

// ?3种状态 pending resolved rejected
// 1.状态是不可逆的
// 2.状态是私有的，js无法直接检测

let p1 = new Promise((resolve, reject) => resolve())
console.log(p1) // Promise { <resolved> }

let p2 = new Promise((resolve, reject) => reject())
console.log(p2) // Promise { <rejected> }
// Uncaught error (in promise)

/**
 * !执行器函数职责
 * !1.初始化 Promise 的异步行为（同步执行）
 * !2.控制状态的最终转换
 */

new Promise(() => setTimeout(console.log, 0, 'executor'))
setTimeout(console.log, 0, 'promise initialized')

let p3 = new Promise((resolve, reject) => setTimeout(resolve, 1000))
console.log(p3) // Promise { <pending> } 不会执行 resolve

let p4 = new Promise((resolve, reject) => {
  resolve()
  reject() // 无效 因为状态是不可逆的
})
console.log(p4) // Promise { <resolved> }

// ?定时 reject
let p5 = new Promise((resolve, reject) => {
  setTimeout(reject, 10000) // 10s 后调用reject
})

setTimeout(console.log, 0, p5) // Promise { <pending> }
setTimeout(console.log, 11000, p5) // Promise { <rejected> }

// ?直接实例化 resolve
let p6 = Promise.resolve()
// 等同于
// let p6 = new Promise((resolve, reject) => resolve())
console.log(p6)

// 多余的参数会忽略
console.log(Promise.resolve(11)) // Promise {<fulfilled>: 11}
console.log(Promise.resolve(11, 12, 13)) // Promise {<fulfilled>: 11}

// ?Promise.resolve 是一个幂等方法
// 如果传入的参数本身就是一个 Promise,就类似与一个空包装
let p7 = Promise.resolve(11)
console.log(p7 === Promise.resolve(p7)) // true
console.log(p7 === Promise.resolve(Promise.resolve(p7))) // true

let p8 = Promise.resolve(new Error('foo'))
console.log(p8)

// !reject抛出的错误无法通过 try/catch 捕获
let p9 = Promise.reject('3')
console.log(p9) // Promise {<rejected>: 3}

p9.then(null, (e) => console.log(e)) // 3

try {
  throw new Error('foo')
} catch (e) {
  console.log(e) // Error: foo
}

try {
  Promise.reject(new Error('bar'))
} catch (e) {
  console.log(e) // Uncaught (in promise) Error: bar
}
