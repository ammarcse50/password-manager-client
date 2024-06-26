
import  { useContext } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {

 
   

  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() =>{

     

        Swal.fire("LogOut Success!");}) 
       
      .catch((error) => console.error(error));
  };

  return (
    <div className="font-semibold  py-5 shadow-xl mb-10">
      <div className="max-w-6xl mx-auto lg:flex  lg:justify-between items-center">
        <div className="flex justify-center lg:flex-none">
          {" "}
          <button className="flex justify-center  items-center mb-6 text-5xl">
            P<RiLockPasswordFill className="text-primary-color" />
            ss{" "}
            <span className="text-second-color flex justify-center items-center">
              St{" "}
              <span className="">
                <FaStarOfLife className="text-5xl text-primary-color" />
              </span>
              re
            </span>{" "}
          </button>
        </div>

        <div className="flex text-primary-color gap-10 justify-center lg:justify-normal ">
          <Link
            to="/"
            className="hover:text-second-color font-semibold md:text-xl"
          >
            Home
          </Link>
          <Link
          to="/passstore"
            href=""
            className="hover:text-second-color font-semibold md:text-xl"
          >
            <button className="flex justify-center  items-center mb-6 ">
            V<RiLockPasswordFill className="text-primary-color" />
             ult
            
          </button>
          </Link>
          {user ? (
            <Link
              onClick={handleLogOut}
              className="hover:text-second-color font-semibold md:text-xl"
            > <span > Logout </span>
             
            </Link>
          ) : (
            <Link
              to="/login"
              className="hover:text-second-color font-semibold md:text-xl"
            >
              Login
            </Link>
          )}
          <Link
            to="/about"
            className="hover:text-second-color font-semibold md:text-xl"
          >
           About
          </Link>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Navbar;
