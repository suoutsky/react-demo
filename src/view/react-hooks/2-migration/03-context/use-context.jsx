import React, { useContext } from 'react';

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }



function Display() {
  // 通过useContext直接从NumberContext取值
  const value = useContext(NumberContext);
  return (
    <>
      <div>useContext -> The answer is {value}.</div>
    </>
  );
}

export default function App() {
    // Use the Provider to make a value available to all
    // children and grandchildren
    return (
      <NumberContext.Provider value={42}>
        <div>
          <Display />
        </div>
      </NumberContext.Provider>
    );
  }