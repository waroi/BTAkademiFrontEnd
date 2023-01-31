import axios from "axios";

const api = () => {
  return axios.create({
    baseURL: "http://localhost:3000",
  });
};

export default api;
