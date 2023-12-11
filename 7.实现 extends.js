/**
 *
 * extends
 * !注意
 * 1. 将原型指向需要继承的构造函数
 * 2. 调用被继承构造函数来生成实例
 */

function B(name) {
  this.name = name;
}

function A(name, age) {
  // 将A的原型指向B
  // Object.setPrototypeOf(A, B)
  A.prototype = Object.create(B.prototype);

  // 调用B的构造函数来初始化实例 相当于super
  // Object.getPrototypeOf(A).call(this, name)
  B.call(this, name);

  // 将A自己的属性添加到新实例上
  this.age = age;

  // 不需要显式返回，构造函数会自动返回新实例
  //   return this
}

let a = new A('Test', 17);
console.log(a);
