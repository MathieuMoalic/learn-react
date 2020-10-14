import React, { Component } from "react";
import Repos from "./metrics/Repos";
import Info from "./metrics/Info";

export default class Results extends Component {
  render() {
    return (
      <div className="w-full container mx-auto m-24">
        <div id="repos">
          <div className="px-2">
            <div className="flex -mx-2">
              <Repos repos={this.props.repos} />
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
