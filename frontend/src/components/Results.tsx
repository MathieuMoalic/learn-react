import React, { Component } from "react";
// import Info from "./metrics/Info";

interface Props {
  title: string;
  description: string;
  completed: boolean | string;
}
interface State {}

export default class Results extends Component<Props, State> {
  render() {
    return (
      <div className="px-20 rounded overfloww-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Task</div>
          <div>
            <strong>title: </strong>
            <span className="text-gray-700 text-base">{this.props.title}</span>
          </div>
          <div>
            <strong>description: </strong>
            <span className="text-gray-700 text-base">
              {this.props.description}
            </span>
          </div>
          <div>
            <strong>completed: </strong>
            <span className="text-gray-700 text-base">
              {this.props.completed.toString()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
