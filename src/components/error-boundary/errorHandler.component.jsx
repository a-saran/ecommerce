import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.error(error);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <div>SomeThing Went wrong</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
