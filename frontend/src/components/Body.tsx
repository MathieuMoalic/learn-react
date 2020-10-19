import React, { Component } from "react";
import Form from "./Form";
import Results from "./Results";
import axios, { AxiosInstance, AxiosResponse } from "axios";

interface Props {}
interface State {
  followers: number | null;
  following: number | null;
}
const api: AxiosInstance = axios.create({
  baseURL: `https://api.github.com/users/`,
});
export default class Body extends Component<Props, State> {
  state = {
    followers: null,
    following: null,
  };
  handleSubmit = async (inputUsername: string) => {
    await api.get(`${inputUsername}`).then((response: AxiosResponse) => {
      this.setState({ followers: response.data.followers });
      this.setState({ following: response.data.following });
    });
  };
  render() {
    return (
      <div className="w-full container mx-auto my-12">
        <Form handleSubmit={this.handleSubmit} />
        <Results
          followers={this.state.followers}
          following={this.state.following}
        />
      </div>
    );
  }
}
