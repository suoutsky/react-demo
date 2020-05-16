import React, { memo } from "react";

import "./index.css";

/* 每次render */
// function Demo(props) {
//   console.log("render");
//   return <div>{props.name}</div>;
// }
/* 不重复render */
const Demo = memo(function Demo(props) {
  console.log("render");
  return <div>{props.name}</div>;
})

export default class App extends React.Component {
  state = { count: 0 };
  handleClick = () => {
    this.setState({ count: 1 });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello Memo</h1>
        <button onClick={this.handleClick}>
          This is Memo Demo{this.state.count}
        </button>
        <Demo name={"daisy"} />
      </div>
    );
  }
}