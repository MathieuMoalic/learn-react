import React, { Component } from "react";

interface Props {
  error: boolean;
}
interface State {}

export default class APIalert extends Component<Props, State> {
  state = {};

  render() {
    return (
      this.props.error && (
        <div
          className="bg-grey-300 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>Task ID not found.</p>
        </div>
      )
    );
  }
}
