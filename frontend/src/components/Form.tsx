import React, { Component } from "react";

interface Props {
  // handleSubmit: Promise<voformID>;
  handleSubmit: any;
}

export default class Form extends Component<Props> {
  state = {
    formID: "",
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      formID: event.target.value,
    });
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.formID);
  };
  render() {
    return (
      <div>
        <h3 className="text-4xl text-center my-16">Learn React</h3>
        <form className="w-full max-w-xl mx-auto" onSubmit={this.handleSubmit}>
          <div className="flex items-center border-b border-b-2 border-red-700 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter the Task id"
              value={this.state.formID}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
