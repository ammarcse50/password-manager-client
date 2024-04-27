import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const context = useContext(AuthContext);

  const location = useLocation();

  console.log(location);
  const { user,loading } = context;

  if (loading) {
    return <span className="loading loading-spinner loading-lg text-center"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
