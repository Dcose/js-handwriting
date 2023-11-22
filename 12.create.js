// 模拟Object.create
function create(proto) {
  function F() {}
  F.prototype = proto
  return new F()
}

// Parent 构造函数
function Parent(name) {
  this.name = name
}

Parent.prototype.sayName = function () {
  console.log(this.name)
}

// Child
function Child(age, name) {
  // !继承了 Parent 的!!!构造函数的属性!!!,没有继承原型属性/方法
  Parent.call(this, name)
  this.age = age
}

// const c = new Child(12, 's')
// c.sayName() //? TypeError: c.sayName is not a function

Child.prototype = create(Parent.prototype) // 继承原型属性/方法
// Child.prototype.constructor === Parent // true Child.prototype 的 constructor 指向的是Parent

Child.prototype.constructor = Child // 修复原型链的继承问题
// Child.prototype.constructor === Parent // false

Child.prototype.sayAge = function () {
  console.log(this.age)
}

// Test Case
const child = new Child(18, 'Jack')
child.sayName()
child.sayAge()
