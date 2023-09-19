import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL, // Replace with your API base URL
});

instance.interceptors.request.use(
  function (config) {
    // Modify the request config here (e.g., adding headers)
    // For example:
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaGl2YXJhbS5zb21hZ29uaSIsImlhdCI6MTY5MTY0NzYyOCwiZXhwIjoxNjkxNjgzNjI4fQ.kqdC-r7rstogkJwndxE46fOL1RoRZVXgaYVhwL3K0HY";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Handle successful responses here
    return response;
  },
  function (error) {
    // Handle errors here
    return Promise.reject(error);
  }
);

export default instance;
