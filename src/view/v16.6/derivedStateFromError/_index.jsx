import React from "react";

export default class ErrorBoundary extends React.Component {
    state = { hasError: false };
    componentDidCatch(error, info) {
      this.setState({ hasError: false })
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