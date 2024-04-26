import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="lg:flex  lg:justify-between items-center font-semibold  py-5 shadow">
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
        <a href="" className="hover:text-second-color font-semibold md:text-xl">
          Home
        </a>
        <a href="" className="hover:text-second-color font-semibold md:text-xl">
          About
        </a>
        <a href="" className="hover:text-second-color font-semibold md:text-xl">
          Login
        </a>
        <a href="" className="hover:text-second-color font-semibold md:text-xl">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
