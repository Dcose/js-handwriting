function _new(fn, ...args) {
  // *创建一个空对象，并将其原型设置为构造函数的原型
  const instance = Object.create(fn.prototype);

  // *调用构造函数，将实例对象作为上下文，并传递参数
  let res = fn.apply(instance, args);

  // *如果构造函数返回一个对象，则返回该对象；否则返回创建的实例对象
  return typeof res === 'object' && res !== null ? res : instance;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

const john = _new(Person, 'John', 25);
john.sayHello(); // Hello, my name is John and I'm 25 years old.
