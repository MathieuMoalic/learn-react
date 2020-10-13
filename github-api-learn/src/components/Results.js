import React, { Component } from "react";
import Tags from "./metrics/Tags";
import Info from "./metrics/Info";

export default class Results extends Component {
  render() {
    return (
      <div className="w-full container mx-auto m-24">
        <div id="tags">
          <div className="px-2">
            <div className="flex -mx-2">
              <Tags tags={this.props.tags} />
              <Info
                tags={this.props.tags}
                title={this.props.title}
                channelTitle={this.props.channelTitle}
                views={this.props.views}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
