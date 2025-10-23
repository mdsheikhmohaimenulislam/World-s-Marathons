import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { IoIosContacts } from "react-icons/io";

import { AuthContext } from "../../Context/AuthContext/AuthContext";
import LogOut from "./LogOut";
import { IoHome, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { FaPersonRunning } from "react-icons/fa6";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ThemeContext } from "../../Theme/ThemeContext";

// import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const NavBar = () => {
  const { user } = use(AuthContext);
  const { theme, handleToggleTheme } = use(ThemeContext);

  const Links = (
    <>
      {user && (
        <>
          <NavLink className="font-extrabold text-xl flex" to="/dashboard">
            <MdOutlineSpaceDashboard className="mt-1" />
            Dashboard
          </NavLink>
        </>
      )}
    </>
  );

  // ${theme === "dark"? "bg-gray-600" : "bg-base-300"}

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm ">
      <div className="w-11/12   mx-auto flex justify-between ">
        <div className={`navbar `}>
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className={`menu  menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow
 text-black bg-gray-300`}
              >
                <NavLink className="text-xl font-extrabold flex" to="/">
                  <IoHome className="mt-1" />
                  Home
                </NavLink>
                <NavLink
                  className="text-xl font-extrabold flex"
                  to="/allMarathons"
                >
                  <FaPersonRunning className="mt-1" />
                  Marathons
                </NavLink>

                {Links}
                {user ? (
                  <LogOut />
                ) : (
                  <>
                    <Link to="/login" className="font-bold text-xl text-black">
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="font-bold text-xl text-black"
                    >
                      Register
                    </Link>
                  </>
                )}
              </ul>
            </div>
            <Link to="/">
              <div className="flex items-center ">
                <img
                  className="ml-3 md:ml-0 w-[50px] h-[40px]"
                  src="https://i.ibb.co/MyfMc8Ks/png-transparent-walt-disney-world-marathon-disneyland-paris-disneyland-resort-rundisney-marathon-mis.png"
                  alt=""
                />
                <h1 className="ml-0 text-xs md:text-lg font-extrabold">
                  World's Marathons
                </h1>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden  lg:flex">
            <ul className="menu gap-5 menu-horizontal  px-1">
              <NavLink className="text-xl font-extrabold" to="/">
                Home
              </NavLink>
              <NavLink className="text-xl font-extrabold" to="/allMarathons">
                Marathons
              </NavLink>
              <NavLink className="text-xl font-extrabold" to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="text-xl font-extrabold" to="/crypto">
                Supports
              </NavLink>

              <NavLink className="font-extrabold text-xl flex" to="/dashboard">
                Dashboard
              </NavLink>
            </ul>
          </div>

          <div className="flex items-center relative group navbar-end space-x-3">
            {/* User Avatar */}
            {user && user.photoURL ? (
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src={user.photoURL}
                alt="User Avatar"
              />
            ) : (
              <IoIosContacts size={45} className="cursor-pointer" />
            )}

            {/* Hover Name Box */}
            {user && (
              <div className="absolute -top-[38px] mt-12 mr-15  right-0 bg-white border rounded shadow-md px-4 py-2 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                {user.displayName || "User"}
              </div>
            )}
          </div>
          {/* Auth Button */}
          <div className="  mr-8 hidden md:flex items-center gap-x-4">
            {user ? (
              <LogOut />
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn bg-blue-400 text-base-100 px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn bg-blue-400 text-base-100 px-4 py-2"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          {/* Theme section */}

          <button onClick={handleToggleTheme}>
            {theme === "dark" ? (
              <IoMoonOutline size={30} />
            ) : (
              <IoSunnyOutline size={30} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
