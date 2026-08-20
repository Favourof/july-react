import axios from "axios";

const baseUrl = "http://localhost:4000";
export const publicInstance = axios.create({ baseURL: baseUrl });

export const privateInstance = axios.create({ baseURL: baseUrl });

privateInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");

  if (!token) {
    return new Error("Token not Found");
  }

  config.headers.set("Authorization", `Bearer ${token}`);

  return config;
});

publicInstance.interceptors.response.use(function (config) {
  if (config.status == 200) {
    console.log(config.data, "Here I am");
    config.data.message = "I Change the message";
  }
  return config;
});
