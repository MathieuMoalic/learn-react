import React, { Component } from "react";
import Form from "./Form";
import Results from "./Results";
// import github from "../supports/github";
import axios from "axios";

export default class Body extends Component {
  state = {
    repos: [],
    followers: "",
    following: "",
  };
  handleSubmit = async (username) => {
    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    this.setState({
      repos: reposResponse.data,
      followers: userResponse.data.followers,
      following: userResponse.data.following,
    });
  };
  render() {
    return (
      <div className="w-full container mx-auto my-12">
        <Form handleFormSubmit={this.handleSubmit} />
        <Results
          repos={this.state.repos}
          followers={this.state.followers}
          following={this.state.following}
        />
      </div>
    );
  }
}
