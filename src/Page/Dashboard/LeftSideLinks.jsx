import React from "react";
import { NavLink } from "react-router";

const LeftSideLinks = () => {
  return (
    <div className="flex flex-col space-y-8 font-medium p-1">
      <NavLink to="/addMarathon">Add Marathon</NavLink>
      <NavLink to="/myMarathonList">My Marathon List</NavLink>
      <NavLink to="/myApplyList"> My Apply List</NavLink>
    </div>
  );
};

export default LeftSideLinks;
