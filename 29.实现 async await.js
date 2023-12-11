const getData = () =>
  new Promise((resolve) => setTimeout(() => resolve('data'), 1000));

async function test() {
  const data1 = await getData();
  console.log('data1', data1);
  const data2 = await getData();
  console.log('data2', data2);
  return 'success';
}

// test().then((res) => console.log(res));

function generatorToAsync(generatorFunc) {
  return function () {
    // create a generator object
    const gen = generatorFunc.apply(this, arguments);
    // return a promise
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult;
        try {
          generatorResult = gen[key](arg);
        } catch (error) {
          return reject(error);
        }
        const { value, done } = generatorResult;
        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(
            (val) => step('next', val),
            (err) => step('throw', err)
          );
        }
      }
      step('next'); // first call
    });
  };
}

// Test Case
function* gen() {
  const data1 = yield getData(1);
  console.log('data1', data1);
  const data2 = yield getData(data1);
  console.log('data2', data2);
  const data3 = yield getData(data2);
  console.log('data3', data3);
  return data3;
}

const testGAsync = generatorToAsync(gen);

testGAsync().then((res) => {
  console.log(res);
});
