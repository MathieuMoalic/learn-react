import React, { Component } from "react";

interface Props {
  followers: any;
  // following: Promise<number>;
}
interface State {}

export default class Info extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="w-1/2 px-2 rounded overfloww-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Info</div>
          <div>
            <strong>Followers: </strong>
            <span className="text-gray-700 text-base">
              {this.props.followers}
            </span>
          </div>
          <div>
            <strong>Following: </strong>
            <span className="text-gray-700 text-base">
              {/* {this.props.following} */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
