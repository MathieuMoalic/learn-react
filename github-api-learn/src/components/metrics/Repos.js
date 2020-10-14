import React from "react";

export default function Repos(props) {
  var repos = props.repos.map(function (repo, i) {
    return <li key={i}>-{repo.name}</li>;
  });
  return (
    <div className="w-1/2 px-2 rounded overfloww-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Repos</div>
        <ul className="text-gray-700 text-base p-4">{repos}</ul>
      </div>
    </div>
  );
}
