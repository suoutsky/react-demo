import React from "react";

class ErrorBoundary extends React.Component {

  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    // 更新state所以下次render可以立刻显示fallback UI
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log(error, info);
  }
  
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}  

export default () => {
  return (<ErrorBoundary>
    sss
  </ErrorBoundary>)
}