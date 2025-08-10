import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";

const LogOut = () => {
  const { logOutHandle } = use(AuthContext);

  //   logOut section
  const handleLogOut = () => {
    logOutHandle()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    toast.error("Log Out", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (

      <Link
        onClick={handleLogOut}
        className="btn bg-blue-400 text-base-100 px-4 py-2"
      >
        Log Out
      </Link>

  );
};

export default LogOut;
