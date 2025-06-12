import { Outlet } from "react-router";
import LeftSideLinks from "./LeftSideLinks";
import { useEffect } from "react";

const Dashboard = () => {

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className=" md:grid md:grid-cols-6 gap-10">
      <div className="md:col-span-2 mb-8">
        <LeftSideLinks />
      </div>
      <div className=" md:col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
