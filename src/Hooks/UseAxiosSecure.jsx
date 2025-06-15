import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

const UseAxiosSecure = () => {
  const { user } = use(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  return axiosInstance ;
};

export default UseAxiosSecure;
