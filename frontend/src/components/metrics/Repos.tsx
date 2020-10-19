// import React from "react";

// export default function Repos(props) {
//   var repos = props.repos.map(function (repo, i) {
//     return <li key={i}>-{repo.name}</li>;
//   });
//   return (
//     <div className="w-1/2 px-2 rounded overfloww-hidden shadow-lg">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Repos</div>
//         <ul className="text-gray-700 text-base p-4">{repos}</ul>
//       </div>
//     </div>
//   );
// }

import React, { Component } from "react";

interface Props {
  repos: any;
}
interface State {
  repos: any;
}

export default class Repos extends Component<Props, State> {
  state = {
    repos: this.props.repos.map(function (repo: any, i: number) {
      return <li key={i}>-{repo.name}</li>;
    }),
  };

  render() {
    return (
      <div className="w-1/2 px-2 rounded overfloww-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Repos</div>
          <ul className="text-gray-700 text-base p-4">{this.state.repos}</ul>
        </div>
      </div>
    );
  }
}
