import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const notify = () => toast("Login Success!");

  const { signInUser, signUpUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  console.log("location in", location);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
        const user = res.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <h2 className="text-center text-5xl font-bold text-second-color">
        Login Now
      </h2>
      <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={() => notify()} to="/" className="btn btn-primary">
            Login
          </button>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="">
            Already Login Done?{" "}
            <Link to="/register" className="text-primary-color">
              Register
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
