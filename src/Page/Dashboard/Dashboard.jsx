import { Outlet } from "react-router";
import LeftSideLinks from "./LeftSideLinks";
import { useEffect } from "react";

const Dashboard = () => {

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className='relative min-h-screen md:flex bg-white'>
      {/* Left Side: Sidebar Component */}
      <LeftSideLinks />
      {/* Right Side: Dashboard Dynamic Content */}
      <div className='flex-1  md:ml-64'>
        <div className='p-10'>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
