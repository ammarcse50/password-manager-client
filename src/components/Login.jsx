import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";

const Login = () => {
     const auth = getAuth(app)
  const notify = () => toast("Login Success!");
 const navigate = useNavigate();

  const location = useLocation();
console.log("location in", location);
  const { signInUser, signUpUser } = useContext(AuthContext);
 
   const emailRef = useRef(null)
 
  // email reference

    const handleForgetPassword =()=>{
           const email= emailRef.current.value;

           if(!email)
           {
            console.log('give email address')

            return
           }
           else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
           {
              console.log('write valid email')
              return
           }
           sendPasswordResetEmail(auth, email)
           .then(()=> alert('password reset email sent!'))
           .catch(error=>console.log(error))

        console.log('current values in the field email',emailRef.current.value)
    }

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    if(!email)
    {
     console.log('give email address')

     return
    }

    signInUser(email, password)
      .then((res) => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
        const user = res.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        alert('Incorrect Data')
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
            ref={emailRef}
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
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
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
