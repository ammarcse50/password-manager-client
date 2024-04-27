import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaStarOfLife } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import Swal from "sweetalert2";
import PassStore from "./PassStore";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/password`).then((res) => {
      setPasswordArray(res.data);
    });
  }, []);

  const handleChnage = (e) => {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });

    console.log(form);
  };   
    
  const handleUpdate = id =>{

          console.log('id',id)






  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/password", form).then((res) => {
      const data = res.data;

      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Your Password Saved!",
          icon: "success",
        });
      }
    });
    setForm({ site: "", username: "", password: "" });
  };

  return (
    <div className="root " name="manager">
      <div className="flex justify-center lg:flex-none">
        {" "}
        <button className="flex justify-center  items-center mb-6 text-5xl">
          P<RiLockPasswordFill className="text-primary-color" />
          ssword Manager
        </button>
      </div>
      <div>
        <div className="flex justify-center">
          {" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Store Your Password",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Best Way to save",
              1000,
              "Safe And Secure",
              1000,
              "Create Account",
              1000,
            ]}
            wrapper="span"
            className="text-[#0ecb34]"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>{" "}
        <form onSubmit={handlePasswordSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Website URL</span>
            </label>
            <input
              type="text"
              value={form.site}
              onChange={handleChnage}
              name="site"
              placeholder="Enter Website URL"
              className="input input-bordered outline outline-1 hover:outline-[#0ecb34]"
              required
            />
          </div>
          <div className="flex gap-4">
            {" "}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-white">Username</span>
              </label>
              <input
                type="text"
                value={form.username}
                onChange={handleChnage}
                name="username"
                placeholder="Enter Username"
                className="input input-bordered outline outline-1 hover:outline-[#0ecb34]"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-white flex items-center">
                  Password{" "}
                  <a onClick={toggleVisibility} className="ml-3" name="eye">
                    {isVisible ? (
                      <FaEyeSlash className="text-xl" />
                    ) : (
                      <FaEye className="text-xl" />
                    )}
                  </a>
                </span>
              </label>
              <span></span>
              <input
                type={isVisible ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChnage}
                placeholder="Enter Password"
                className="input input-bordered outline outline-1 hover:outline-[#0ecb34]"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn text-white text-3xl bg-[#1d7edd] hover:bg-[#0ecb34]">
              Save
            </button>
          </div>
        </form>
      </div>
     
     
    </div>
  );
};

export default Manager;
