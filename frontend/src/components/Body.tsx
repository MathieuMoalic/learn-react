import React, { Component } from "react";
import Form from "./Form";
import Results from "./Results";

interface Props {}
interface State {
  username: string;
}

export default class Body extends Component<Props, State> {
  state = {
    username: "",
  };
  handleSubmit = (usernameGiven: string) => {
    this.setState({
      username: usernameGiven,
    });
  };
  render() {
    return (
      <div className="w-full container mx-auto my-12">
        <Form BodyhandleSubmit={this.handleSubmit} />
        <Results username={this.state.username} />
      </div>
    );
  }
}
