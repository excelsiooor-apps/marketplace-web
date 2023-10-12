/* eslint-disable react/destructuring-assignment */
import { Component, ErrorInfo, ReactNode } from 'react';
import toast from 'react-hot-toast';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    // Define a state variable to track whether there is an error or not
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    // TODO: Handle error by Sentry
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // TODO: do something...
      toast.error('Something went wrong...');
    }

    // Return children components in case of no error
    return this.props.children;
  }
}
