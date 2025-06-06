import React from "react";
import { NavLink } from "react-router";

const LeftSideLinks = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn bg-blue-400 text-white drawer-button">
          Click Here
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-xl font-bold space-y-4 min-h-full w-50 p-4">
          <NavLink to="/dashboard/addMarathon">Add Marathon</NavLink>
          <NavLink to="/dashboard/myMarathonList">My Marathon List</NavLink>
          <NavLink to="/dashboard/myApplyList">My Apply List</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideLinks;
