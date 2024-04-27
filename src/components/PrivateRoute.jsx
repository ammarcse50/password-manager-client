import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children , loading }) => {

const context = useContext(AuthContext);
    
  const { user } = context;
  
   if(loading)
{
    return <span className="loading loading-spinner loading-lg"></span>

     
}


  if (user) {
    return children;
    
  }


  return <Navigate to="/login" />;
};

export default PrivateRoute;
