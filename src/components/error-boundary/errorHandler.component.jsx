import React, { Component } from "react";
import ErrorPage from "../404/404.component";

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
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
