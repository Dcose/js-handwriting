// class EventBusE {
//   constructor() {
//     this.eventObj = {} // 存储所有的订阅事件
//   }

//   // 订阅事件,类似监听事件$on('key',()=>{})
//   $on(name, callback) {
//     // 判断是否存储过
//     if (!this.eventObj[name]) {
//       this.eventObj[name] = []
//     }
//     this.eventObj[name].push(callback) // 往事件数组里面push
//   }

//   // 发布事件,类似于触发事件$emit('key')
//   $emit(name) {
//     // 获取存储的事件回调函数数组
//     const eventList = this.eventObj[name]

//     // 执行所有回调函数
//     for (const callback of eventList) {
//       callback()
//     }
//   }
// }

// // 初始化EventBus
// let EB = new EventBusE()

// // 订阅事件
// EB.$on('key1', () => {
//   console.log("I'm Subscribe to events A")
// })
// EB.$on('key2', () => {
//   console.log("I'm Subscribe to events B")
// })
// EB.$on('key3', () => {
//   console.log("I'm Subscribe to events C")
// })

// // 发布事件
// EB.$emit('key1')
// EB.$emit('key2')
// EB.$emit('key3')

// class EventBusM {
//   constructor() {
//     this.eventObj = {}
//   }
//   $on(name, callback) {
//     if (!this.eventObj[name]) {
//       this.eventObj[name] = []
//     }
//     this.eventObj[name].push(callback)
//     console.log(this.eventObj)
//   }
//   $emit(name, ...args) {
//     const eventList = this.eventObj[name]
//     for (const callback of eventList) {
//       callback(...args)
//     }
//   }
// }

// // 初始化EventBus
// let EB = new EventBusM()

// // 订阅事件
// EB.$on('key1', (name, age) => {
//   console.log("I'm Subscribe to events A", name, age)
// })
// EB.$on('key1', (name, age) => {
//   console.log("I'm Subscribe to events B", name, age)
// })
// EB.$on('key2', (name) => {
//   console.log("I'm Subscribe to events C", name)
// })

// // 发布事件
// EB.$emit('key1', 'TEST', 17)
// EB.$emit('key2', 'TEST')

// class EventBusH {
//   constructor() {
//     this.eventObj = {}
//     this.callbackId = 0 // 每个函数的ID
//   }
//   $on(name, callback) {
//     if (!this.eventObj[name]) {
//       this.eventObj[name] = {}
//     }
//     const id = this.callbackId++
//     this.eventObj[name][id] = callback // 以键值对的形式存储回调函数
//     return id // 将id返回出去，可以利用该id取消订阅
//   }
//   $emit(name, ...args) {
//     const eventList = this.eventObj[name]
//     for (const id in eventList) {
//       eventList[id](...args)
//       if (id.indexOf('D') !== -1) {
//         delete eventList[id]
//       }
//     }
//   }
//   // 取消订阅函数，类似于$off('key1', id)
//   $off(name, id) {
//     // 删除存储在事件列表中的该事件
//     delete this.eventObj[name][id]
//     console.info(`id: ${id} is delete`)

//     // 如果这是最后一个订阅者，则删除整个对象
//     if (!Object.keys(this.eventObj[name]).length) {
//       delete this.eventObj[name]
//     }
//   }
//   $once(name, callback) {
//     if (!this.eventObj[name]) {
//       this.eventObj[name] = {}
//     }
//     const id = 'D' + this.callbackId++
//     this.eventObj[name][id] = callback
//     return id
//   }
// }

// // 初始化EventBus
// let EB = new EventBusH()

// // 订阅事件
// EB.$on('key1', (name, age) => {
//   console.log("I'm Subscribe to events A", name, age)
// })
// EB.$once('key1', (name, age) => {
//   console.log("I'm Subscribe to events B", name, age)
// })
// EB.$on('key2', (name) => {
//   console.log("I'm Subscribe to events C", name)
// })

// // 发布事件
// EB.$emit('key1', 'TEST', 17)
// console.info('key1 too')
// EB.$emit('key1', 'TEST', 17)
// EB.$emit('key2', 'TEST')

class EventBusM {
  constructor() {
    this._events = this._events || new Map()
    this.callbackId = 0
  }
  $on(name, callback) {
    if (!this._events.has(name)) {
      this._events.set(name, new Map())
    }
    const id = this.callbackId++
    this._events.get(name).set(id, callback)
    return id
  }
  $emit(name, ...args) {
    const eventList = this._events.get(name)
    if (eventList) {
      eventList.forEach((callback, id) => {
        callback(...args)
        if (id.toString().indexOf('D') !== -1) {
          eventList.delete(id)
        }
      })
    }
  }
  $off(name, id) {
    const eventList = this._events.get(name)
    if (eventList && eventList.has(id)) {
      eventList.delete(id)
      console.info(`id: ${id} is deleted`)

      if (eventList.size === 0) this._events.delete(name)
    }
  }
  $once(name, callback) {
    if (!this._events.has(name)) this._events.set(name, new Map())
    const id = 'D' + this.callbackId++
    this._events.get(name).set(id, callback)
    return id
  }
}

let EB = new EventBusM()

// 订阅事件
EB.$on('key1', (name, age) => {
  console.log("I'm Subscribe to events A", name, age)
})

// once
EB.$once('key1', (name, age) => {
  console.log("I'm Subscribe to events B", name, age)
})

EB.$on('key2', (name) => {
  console.log("I'm Subscribe to events C", name)
})

// 发布事件
EB.$emit('key1', 'TEST', 17)
console.info('key1 too')
EB.$emit('key1', 'TEST', 17)
EB.$emit('key2', 'TEST')
