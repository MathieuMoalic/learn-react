import axios, { AxiosInstance, AxiosResponse } from "axios";

const APIcall = async (FormID: string) => {
  const api: AxiosInstance = axios.create({
    baseURL: `http://127.0.0.1:8000/api/testr/`,
  });
  let state = {};

  await api.get(`${FormID}`).then(
    (response: AxiosResponse) =>
      (state = {
        title: response.data.title,
        description: response.data.description,
        completed: response.data.completed,
        error: false,
      })
  );
  // .catch((error) => {
  //   this.setState({ title: "" });
  //   this.setState({ description: "" });
  //   this.setState({ completed: "" });
  //   this.setState({ error: true });
  // });
  return state;
};
// };

export default APIcall;
