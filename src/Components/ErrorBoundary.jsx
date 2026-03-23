import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="max-w-4xl mx-auto my-10 p-6">
          <h1 className="text-2xl font-bold text-red-700 mb-4">Application error</h1>
          <p className="mb-4 text-gray-800">An unexpected error occurred while rendering the app.</p>
          <details className="whitespace-pre-wrap bg-gray-50 p-4 rounded border text-sm">
            <summary className="cursor-pointer font-medium">Show error details</summary>
            <div className="mt-2 text-xs text-red-600">{String(this.state.error)}</div>
            {this.state.info && (
              <pre className="mt-2 text-xs text-gray-700">{this.state.info.componentStack}</pre>
            )}
          </details>
        </main>
      );
    }

    return this.props.children;
  }
}
