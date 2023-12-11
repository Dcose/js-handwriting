Function.prototype._apply = function (context = window, args) {
  // 验证是否为函数调用
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype._apply called on non-function');
  }

  // 将当前函数作为上下文对象的一个属性
  let key = Symbol('key');
  context[key] = this;

  // !调用函数并传递参数 这里是 []，与 call 不同
  let result = context[key](...args);

  // 删除临时属性
  delete context[key];

  // 返回函数执行结果
  return result;
};

// Test Case
function greet(a, b) {
  console.log(`Hello, ${this.name}! Sum is ${a + b}.`);
}

const person = {
  name: 'ss'
};

greet._apply(person, [1, 5]); // Hello, ss! Sum is 4.
