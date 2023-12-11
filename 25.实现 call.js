Function.prototype._call = function (context = window, ...args) {
  // 验证是否为函数调用
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype._call called on non-function');
  }

  // 将当前函数作为上下文对象的一个属性
  const key = Symbol('key');
  context[key] = this;

  // 调用函数并传递参数
  const result = context[key](...args);

  // 删除临时属性
  delete context[key];

  // 返回函数执行结果
  return result;
};

// Test Case
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = {
  name: 'ss'
};

greet._call(person, 'cc'); // Hello, cc! My name is ss.
