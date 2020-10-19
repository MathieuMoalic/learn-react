import React, { Component } from "react";
import Form from "./Form";
import Results from "./Results";
import axios, { AxiosInstance, AxiosResponse } from "axios";

interface Props {}
interface State {
  title: string;
  description: string;
  completed: boolean | string;
}
const api: AxiosInstance = axios.create({
  baseURL: `http://127.0.0.1:8001/api/testr/`,
});
export default class Body extends Component<Props, State> {
  state = {
    title: "",
    description: "",
    completed: "",
  };
  handleSubmit = async (FormID: string) => {
    await api.get(`${FormID}`).then((response: AxiosResponse) => {
      this.setState({ title: response.data.title });
      this.setState({ description: response.data.description });
      this.setState({ completed: response.data.completed });
    });
  };
  render() {
    return (
      <div className="w-full container mx-auto my-12">
        <Form handleSubmit={this.handleSubmit} />
        <Results
          title={this.state.title}
          description={this.state.description}
          completed={this.state.completed}
        />
      </div>
    );
  }
}
