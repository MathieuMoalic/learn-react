import React, { Component } from "react";

export default class Form extends Component {
  state = {
    username: "MathieuMoalic",
  };
  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.username);
  };
  render() {
    return (
      <div>
        <h3 className="text-4xl text-center my-16">GitHub Stats</h3>
        <form className="w-full max-w-xl mx-auto" onSubmit={this.handleSubmit}>
          <div className="flex items-center border-b border-b-2 border-red-700 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter the GitHub Name"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
