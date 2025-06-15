import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

const UseAxiosSecure = () => {
  const { user, logOutHandle } = use(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  //   response Interceptors
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        logOutHandle()
          .then(() => {
            console.log("Sign Out User For 401 Status Code");
          })
          .then((error) => {
            console.log(error);
          });
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default UseAxiosSecure;
