// react15 的时候提供了两种refs的方法： string 跟 callback string:
import React from 'react';
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }
    componentDidMount() {
        console.log('callback string:', this.textInput);
    }
    render() {
        return <input ref={element => this.textInput = element}></input>
        
    }
}

export default MyComponent;