Array._isArray = function (o) {
  return Object.prototype.toString.call(Object(o)) === '[object Array]';
};

console.log(Array._isArray([])); // true
console.log(Array._isArray({})); // true
