
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar> 
      
      <div className="max-w-6xl mx-auto">
       
        <Outlet></Outlet>

       
      </div>{" "}
    </div>
  );
};

export default Root;
