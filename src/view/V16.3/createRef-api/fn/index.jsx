import React from "react";
import { Button } from 'antd';

// function MyFunctionComponent() {
//     return <input />;
//    }

//    class Parent extends React.Component {
//      constructor(props) {
//       super(props);
//       this.textInput = React.createRef();
//      }
//      render() {
//     // 这个不能工作
//     return (
//          <MyFunctionComponent ref={this.textInput} />
//        );
//      }
//    }

export default function CustomTextInput(props) {
  let textInput = React.createRef();
  function handleClick() {
    textInput.current.focus();
  }
  return (
    <div>
      <input type="text" ref={textInput} />
      <Button onClick={handleClick}>Focus the text input</Button>
    </div>
  );
}
