import React, { Component } from "react";
import Info from "./metrics/Info";

interface Props {
  followers: number | null;
  following: number | null;
}
interface State {}

export default class Results extends Component<Props, State> {
  render() {
    return (
      <div>
        <div id="repos">
          <div className="px-2">
            <div className="flex -mx-2">
              {/* <Repos repos={this.props.repos} /> */}
              <Info
                followers={this.props.followers}
                following={this.props.following}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
