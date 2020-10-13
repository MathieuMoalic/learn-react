import axios from "axios";

const KEY = "AIzaSyCBmGUMX_Ra2W8V4xMIAb_8YLpJ9Q9W8Bo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet, statistics",
    key: KEY,
  },
});
