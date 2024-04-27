import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

const context = useContext(AuthContext);

  const { user } = context;

  if (user) {
    return children;
    
  }


  return <Navigate to="/login" />;
};

export default PrivateRoute;
