import axios from "axios";
import React, { ReactElement } from "react";

export const api: any = axios.create({
  baseURL: `https://api.github.com/users/`,
});

// export default function APIcall({}: Props): ReactElement {
//   axios.get(`MathieuMoalic`).then((res) => {
//     const title = res.data.title;
//   });
//   return <div></div>;
// }
