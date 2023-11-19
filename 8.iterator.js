function makeIterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false
        };
      }
      return { value: undefined, done: true };
    }
  };
}

const arr = [1, 2, 3, 4];
const iter1 = makeIterator(arr);
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());

const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    let index = 0;

    let map = new Map();
    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);

    return {
      next() {
        let mapEntries = [...map.entries()];
        if (index < map.size) {
          return {
            value: mapEntries[index++],
            done: false
          };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

// const iter2 = obj[Symbol.iterator]();
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());

for (const i of obj) {
  console.log(i);
}

console.log(new Set([1, 2, 3, 4]));
function test() {
  console.log(arguments);
}
test(1, 2, 3, 4);
