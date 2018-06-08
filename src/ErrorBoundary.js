import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: '' };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, errorInfo: info });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      console.log(this.state.errorInfo)
      return <span></span>;
    }
    return this.props.children;
  }
}