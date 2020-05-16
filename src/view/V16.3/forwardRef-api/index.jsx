import React, {Component} from 'react';
const TextInput = React.forwardRef((props, ref) => (
    <input type="text" placeholder="Hello forwardRef" ref={ref} />
  ))
  
  const inputRef = React.createRef()
  
  export default class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }
  
    handleSubmit = event => {
      event.preventDefault()
      alert('input value is:' + inputRef.current.value)
    }
   
    render() {
   return (
        <form onSubmit={this.handleSubmit}>
          <TextInput ref={inputRef} />
          <button type="submit">Submit</button>
        </form>
      )
    }
  }
  
//   const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//       {props.children}
//     </button>
//   ));
  
//   // You can now get a ref directly to the DOM button:
//   const ref = React.createRef();
//   <FancyButton ref={ref}>Click me!</FancyButton>;