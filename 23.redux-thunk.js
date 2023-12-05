// 中间件函数
const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };

// 模拟 Redux store
const mockStore = () => {
  const dispatched = [];
  const dispatch = (action) => {
    dispatched.push(action);
    console.log('Dispatched:', action);
  };
  const getState = () => ({});

  const nextHandler = thunk({ dispatch, getState });

  const middleware = (next) => (action) => nextHandler(next)(action);

  const store = {
    dispatch: middleware(dispatch),
    getState,
    dispatched
  };

  return store;
};

// 测试用例
const testThunkMiddleware = () => {
  const store = mockStore();

  // 测试传入函数类型的 action
  const functionAction = (dispatch) => {
    dispatch({ type: 'INCREMENT' });
  };

  store.dispatch(functionAction);

  // 测试非函数类型的 action
  const nonFunctionAction = { type: 'SOME_ACTION' };

  store.dispatch(nonFunctionAction);

  console.log('Dispatched actions:', store.dispatched); // 输出观察结果
};

// 运行测试
testThunkMiddleware();
