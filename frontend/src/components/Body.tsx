import React, { Component } from "react";
import Form from "./Form";
import Results from "./Results";
// import APIAlert from "../api/APIAlert";
import APIcall from "../api/APIcall";

interface Props {}
interface State {
  title: string;
  description: string;
  completed: boolean | string;
  error: boolean;
}
export default class Body extends Component<Props, State> {
  state = {
    title: "",
    description: "",
    completed: "",
    error: false,
  };
  // APIcall:any(this.state);
  // this.setState
  render() {
    return (
      <div className="w-full container mx-auto my-12">
        <Form handleSubmit={APIcall} setState={this.setState} />
        {/* <APIAlert error={this.state.error} /> */}
        <Results
          title={this.state.title}
          description={this.state.description}
          completed={this.state.completed}
        />
      </div>
    );
  }
}
