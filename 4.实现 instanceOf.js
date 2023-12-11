/**
 * @description
 * 实例.__ptoto__ === 类.prototype
 *
 * @param {*} example
 * @param {*} classFunc
 */

function myInstanceof(example, classFunc) {
  let proto = Object.getPrototypeOf(example); // 获取 example 的原型对象
  while (true) {
    // Object.prototype.__proto__ === null
    if (proto == null) return false; // 这个时候还没找到 返回 false
    if (proto == classFunc.prototype) return true;
    proto = Object.getPrototypeOf(proto); // 沿着原型链__ptoto__一层一层向上查
  }
}

// Test Case
function Animal(name) {
  this.name = name;
}

const dog = new Animal('Buddy');
console.log(myInstanceof(dog, Animal)); // true
console.log(myInstanceof(dog, Object)); // true
console.log(myInstanceof(dog, String)); // false
console.log(myInstanceof('Hello', String)); // false
console.log(myInstanceof({}, Object)); // true

class Person {}
const person = new Person();
console.log(myInstanceof(person, Object)); // true
