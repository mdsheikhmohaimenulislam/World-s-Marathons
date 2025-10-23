import React from "react";
import { Link } from "react-router";

const ReturnHome = () => {
  return (
    <div>
      <div className="mx-auto">
        <Link to="/">
          <button className="btn bg-blue-500 text-white rounded-md">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReturnHome;
