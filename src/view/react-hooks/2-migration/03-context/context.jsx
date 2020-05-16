import React from "react";
import ReactDOM from "react-dom";

// Create a Context 创建一个上下文
const NumberContext = React.createContext();
// It returns an object with 2 values: 返回具有2个值的对象：
// { Provider, Consumer } {提供者，消费者}

function Display() {
  // Use the Consumer to grab the value from context 使用使用者从上下文中获取值
  // Notice this component didn't get any props!
  return (
    <NumberContext.Consumer>
      {value => <div>Provider，Consumer -> The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}

export default function App() {
    // Use the Provider to make a value available to all  使用提供者为所有子孙辈提供值
    // children and grandchildren
    return (
      <NumberContext.Provider value={42}>
        <div>
          <Display />
        </div>
      </NumberContext.Provider>
    );
  }