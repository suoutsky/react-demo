import React from 'react';
import ReactHookRedux from 'react-hooks-redux';
import { Button } from 'antd'

// 通过 ReactHookRedux 获得 Provider 组件和一个 sotre 对象 
// Store
const { Provider, store } = ReactHookRedux({
  isDev: true, // 打印日志
  initialState: { name: 'dog', age: 0 }
});

// Action && Reducer
function actionOfAdd() {
  return {
    type: 'add the count',
    reducer(state) {
      return { ...state, age: state.age + 1 }; // 每次需要返回一个新的 state
    },
  };
}

// React component
function MyButton() {
  function handleAdd() {
    store.dispatch(actionOfAdd()); //dispatch
  }
  return <Button onClick={handleAdd}>add</Button>;
}
function Page() {
  const state = store.useContext();
  const { name, age } = state;
  return (
    <div>
      {name}~{age} <MyButton />{' '}
    </div>
  );
}

export default function App() {
  return (
    <Provider>
      <Page />
    </Provider>
  );
}
