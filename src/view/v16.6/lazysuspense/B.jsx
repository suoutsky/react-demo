import React from "react";

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

class B extends React.Component {
  render() {
    return <div>BBBBBBBBBBB</div>;
  }
}

export default B;
