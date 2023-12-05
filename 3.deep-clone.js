//! Method one
// const newObj = JSON.parse(JSON.stringify(oldObj));

//! Method two
// function deepClone(obj) {
//   if (typeof obj !== 'object' || obj === null) return obj;
//   const cloneTarget = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       cloneTarget[key] = deepClone(obj[key]);
//     }
//   }
//   return cloneTarget;
// }

//! Method three
const isObject = (obj) =>
  // check if an object is a cloneable object(object or array)
  (typeof obj === 'object' || typeof obj === 'function') && obj !== null;

//? using `new Map()` creates a strong reference
const deepClone = (obj, map = new WeakMap()) => {
  // check if the object has already been cloned
  // if so, return the original object to avoid infinite
  if (map.get(obj)) return obj;

  if (isObject(obj)) {
    // 标记对象为已经克隆，以防止递归时重复克隆同一个对象
    map.set(obj, true);

    // 创建一个与原对象相同类型的克隆目标
    const cloneTarget = Array.isArray(obj) ? [] : {};

    // 遍历原对象的属性
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 递归克隆属性值，并赋值给克隆目标的相应属性
        cloneTarget[key] = deepClone(obj[key], map);
      }
    }

    // 返回深度克隆后的对象
    return cloneTarget;
  } else {
    // 如果不是可克隆的对象（原始值），直接返回
    return obj;
  }
};

// Test Case
const obj = {
  name: 'John',
  age: 20,
  info: {
    city: 'New York'
  },
  hobbies: ['coding', 'reading']
};

const objClone = deepClone(obj);
console.log('%c Line:34 🌮 objClone', 'color:#ed9ec7', objClone);
console.log('-----------------------------------');
obj.name = 'Jane';
obj.hobbies.push('swimming');
obj.info.city = 'San Francisco';
console.log('%c Line:39 🥛 obj', 'color:#6ec1c2', obj);

/**
 * @hint
 * 对于特殊的对象，我们使用以下方式来鉴别:
 * Object.prototype.toString.call(obj);
 */
