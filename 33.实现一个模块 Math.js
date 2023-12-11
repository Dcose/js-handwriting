//? 请实现一个模块 math，支持链式调用math.add(2,4).minus(3).times(2);

class _Math {
  constructor(initValue = 0) {
    this.value = initValue;
  }

  add(...args) {
    this.value = args.reduce((pre, cur) => pre + cur, this.value);
    return this;
  }

  minus(...args) {
    this.value = this.value - args.reduce((pre, cur) => pre + cur);
    return this;
  }

  times(timer) {
    this.value = timer * this.value;
    return this;
  }

  getVal() {
    return this.value;
  }
}

const math = new _Math();
console.log(math.add(2, 4).minus(3).times(2).getVal()); // 6
