import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";

import { NavLink } from "react-router";
import Logo from "../../Components/Logo";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaClipboardList, FaRunning } from "react-icons/fa";
import LogOut from "../../Components/NavBar/LogOut";

const LeftSideLinks = () => {
  const [isActive, setIsActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div className="mt-2 ml-8">
          <Logo />
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-70 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="ml-8 md:ml-0">
            <Logo />
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/*  Menu Items */}
              <ul className="menu text-xl font-medium space-y-4  w-60">
                <NavLink to="/dashboard/addMarathon" className="flex">
                  <IoIosAddCircleOutline size={25} /> Add Marathon
                </NavLink>

                <NavLink to="/dashboard/myMarathonList" className="flex">
                  <FaRunning size={25} />
                  My Marathon List
                </NavLink>

                <NavLink to="/dashboard/myApplyList" className="flex">
                  <FaClipboardList size={25} />
                  My Apply List
                </NavLink>
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />
           <LogOut/>
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftSideLinks;
