import React, { use } from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import { ThemeContext } from "../Theme/ThemeContext";

const Root = () => {
  const {theme} = use(ThemeContext)

  return (
    <div  className={` ${theme === "dark"? "bg-gray-950 " : "bg-white"}`} >
      <NavBar/>
      <div className="w-11/12 mx-auto min-h-[calc(100vh-450px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
