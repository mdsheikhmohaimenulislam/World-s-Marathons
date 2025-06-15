import React from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const UserGetAllUserApi = () => {
  const axiosSecure = UseAxiosSecure();

  //   const getAllUser2 = (email) => {
  //     return axiosSecure.get(`/users?email=${email}`).then((res) => {res.data});
  //   };

//   const getAllUser2 = (email) => {
//     return axiosSecure.get(`/users?email=${email}`).then((res) => res.data);
//   };


const getAllUser2 = (email, searchParams) => {
  return axiosSecure
    .get("/users", {
      params: {
        email,
        ...(searchParams && { searchParams }), // only include if defined
      },
    })
    .then((res) => res.data);
};

  return {
    getAllUser2,
  };
};

export default UserGetAllUserApi;
