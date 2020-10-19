import React, { Component } from "react";
import Info from "./metrics/Info";
import axios from "axios";

// import APIcall from "../supports/APIcall";

interface Props {
  username: string;
}
interface State {
  followers: any;
  // following: Promise<number>;
}

const api: any = axios.create({
  baseURL: `https://api.github.com/users/`,
});

export default class Results extends Component<Props, State> {
  state = {
    followers: 0,
  };
  getFollower = async () => {
    let data = await api
      .get(`${this.props.username}`)
      .then((data: any) => data);
    this.setState({ followers: data });
  };
  render() {
    return (
      <div>
        <div id="repos">
          <div className="px-2">
            <div className="flex -mx-2">
              {/* <Repos repos={this.props.repos} /> */}
              <Info
                followers={this.state.followers}
                // following={this.state.following}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
