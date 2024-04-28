import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const About = () => {



  const onSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);

    formData.append("access_key", "57c02a7e-d5af-46e3-b802-49ad7db6f669");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
       Swal.fire('Your message sent!')
      event.target.reset();
    } else {
      console.log("Error", data);
    
    }
  };









  return (
    <div>
      <h2 className="text-5xl font-bold text-center  mb-10 text-[#1d7edd]">
        {" "}
        About
      </h2>

      <p className="text-white p-4 ">
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

      <div className="">
        <form onSubmit={onSubmit} className="card-body md:w-1/2 mx-auto mb-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="hidden" name="access_key" value="57c02a7e-d5af-46e3-b802-49ad7db6f669"/>
            <input
              type="name"
              placeholder="Enter Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              placeholder="Enter Your Message"
              className="input input-bordered p-4  h-24 resize-none "
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#1d7edd] text-black text-xl hover:bg-[#0ecb34]">
              Login
            </button>
          </div>
        </form>
      </div>

      <div className="flex gap-5 justify-center mb-10">
        {" "}
        <Link to="https://api.whatsapp.com/send?phone=8801883128299">
          <span className="mt-auto">
            <FaWhatsappSquare className="text-5xl text-second-color hover:text-primary-color" />
          </span>
        </Link>
        <Link to="https://www.linkedin.com/in/mohammad-ammar-96b551254/">
          <span className="mt-auto">
            <FaLinkedin className="text-5xl text-second-color hover:text-primary-color" />
          </span>
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=61551789883517">
          <span className="mt-auto">
            <FaFacebook className="text-5xl text-second-color hover:text-primary-color" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default About;
