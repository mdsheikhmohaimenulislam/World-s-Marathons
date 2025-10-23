import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-80">
        <div className="w-14 h-14 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRouter;



