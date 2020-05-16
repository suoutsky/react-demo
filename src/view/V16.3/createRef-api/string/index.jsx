// react15 的时候提供了两种refs的方法： string 跟 callback string:
import React from 'react';
export default class MyComponent extends React.Component {
    componentDidMount() {
        console.log('string.value：',this.refs.textInput.value);
    }
    render() {
        return <input ref='textInput' value="stringRef"></input>
    }
}