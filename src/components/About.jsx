import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center  mb-10 text-[#1d7edd]">
        {" "}
        About
      </h2>

      <p className="text-white">
        Introducing our secure and convenient password manager, designed to
        simplify your online experience and keep your digital accounts safe.
        With our password manager, you can effortlessly store and manage your
        usernames, website names, and passwords in one centralized location.
        Gone are the days of struggling to remember multiple login credentials
        or resorting to insecure methods of storing passwords. Our password
        manager provides a user-friendly interface where you can easily organize
        and access your account information whenever you need it.
      </p>

      <h2 className="text-5xl pt-32 font-bold text-center  mb-10 text-[#1d7edd]">
        {" "}
        Contact
      </h2>

      <div className="flex justify-evenly">
        {" "}
       <Link to="https://api.whatsapp.com/send?phone=8801883128299"><span className="mt-auto">
          <FaWhatsappSquare className="text-5xl text-second-color hover:text-primary-color" />
        </span></Link> 
       <Link to="https://www.linkedin.com/in/mohammad-ammar-96b551254/"><span className="mt-auto">
          <FaLinkedin className="text-5xl text-second-color hover:text-primary-color" />
        </span></Link> 
        <Link to="https://www.facebook.com/profile.php?id=61551789883517"><span className="mt-auto">
          <FaFacebook className="text-5xl text-second-color hover:text-primary-color" />
        </span></Link>
      </div>
    </div>
  );
};

export default About;
