Function.prototype._bind = function (context) {
  // Verify if it is a function call
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype._bind called on non-function');
  }

  // store current function
  let self = this;

  // create a new parameter list
  let args = [...arguments].slice(1);

  let fn = function (...innerArg) {
    // use new call fn?
    // when called as a constructor, this refers to the instance
    const isNew = this instanceof fn;

    // if `fn` is called with new, it is bound to this;
    // otherwise, it is bound to the passed context.
    return self.apply(isNew ? this : Object(context), args.concat(innerArg));
  };

  // copy the prototype of the original function to fn.
  // in some cases, functions do not have a prototype, such as arrow functions.
  if (self.prototype) {
    fn.prototype = Object.create(self.prototype);
  }

  return fn;
};

// ?NOTE
const func = function () {
  console.log(this instanceof func);
};

// when called as a regular function
func(); // false

// when called as a constructor
new func(); // true

// Test Case

// function call
const mo = {
  x: 17,
  getX: function () {
    return this.x;
  }
};

const unboundGetX = mo.getX;
// The function gets invoked at the global scope
console.log(unboundGetX()); // undefined

const boundGetX = unboundGetX._bind(mo);
console.log(boundGetX()); // 17

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log._bind('this value', 1, 2);
const boundLog2 = boundLog._bind('new this value', 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6

// new call
var name = 'Jack';
var Yve = {
  name: 'Yvette'
};
function person(age, job, gender) {
  console.log(this.name, age, job, gender);
}
var bindYve = person._bind(Yve, 22, 'engineer');
var obj = new bindYve('female');
