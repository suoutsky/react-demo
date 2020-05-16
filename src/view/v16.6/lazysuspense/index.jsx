import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./index.css";
import A from "./A";
// import B from "./B";
import C from "./C";

// 需要用到的时候才加载进来，当然还有预加载更好
const B = lazy(() => import("./B"));
function App() {
  console.log('A------->', A);
  console.log('B------>', B);
  console.log('C------>', C);
  return (
    <div className="App">
      <h1>React 16</h1>
      <Tabs>
        <TabList>
          <Tab>A</Tab>
          <Suspense fallback={<div>Loading...</div>}>
          <Tab>B</Tab>
          </Suspense>
          <Tab>C</Tab>
        </TabList>

        <TabPanel>
          <A />
        </TabPanel>

        <TabPanel>
          <B />
        </TabPanel>

        <TabPanel>
          <C />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;