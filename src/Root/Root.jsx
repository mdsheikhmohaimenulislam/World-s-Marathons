import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar/>
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
