import axios from "axios";

export default axios.create({
  // baseURL: process.env.api,
  baseURL: "http://192.168.1.26:10800/",
  headers: {
    "Content-type": "application/json",
  },
});
