import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePass = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const loadPass = useLoaderData();

  const { _id, site, username, password } = loadPass;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const site = form.site.value;
    const username = form.username.value;
    const password = form.password.value;

    const pass = { site, username, password };

    axios.put(`http://localhost:5000/password/${_id}`, pass).then((res) => {
      const data = res.data;
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Your Data Changed!",

          icon: "success",
        });
        form.reset()
      }
    });
  };

  return (
    <div>
      <h2>update</h2>

      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Website URL</span>
          </label>
          <input
            type="text"
            defaultValue={site}
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
              defaultValue={username}
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
              defaultValue={password}
              placeholder="Enter Password"
              className="input input-bordered outline outline-1 hover:outline-[#0ecb34]"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn text-white text-3xl bg-[#1d7edd] hover:bg-[#0ecb34]">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePass;
