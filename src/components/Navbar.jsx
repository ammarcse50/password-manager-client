import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import app from "../firebase/firebase.config";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const auth = getAuth(app);
const Navbar = () => {
  const notify = () => toast("LogOut Successful!");
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
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
          <a
            href=""
            className="hover:text-second-color font-semibold md:text-xl"
          >
            About
          </a>
          {user ? (
            <Link
              onClick={handleLogOut}
              className="hover:text-second-color font-semibold md:text-xl"
            > <span onClick={()=>notify()}> SignOut </span>
             
            </Link>
          ) : (
            <Link
              to="/login"
              className="hover:text-second-color font-semibold md:text-xl"
            >
              Login
            </Link>
          )}
          <a
            href=""
            className="hover:text-second-color font-semibold md:text-xl"
          >
            Contact
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
