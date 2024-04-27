import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { getAuth, sendEmailVerification } from "firebase/auth";
import app from "../firebase/firebase.config";

 const auth= getAuth(app)
const Register = () => {
  const { signInUser, signUpUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signUpUser(email, password).then((res) => {
      const user = res.user;
        console.log(user)
        sendEmailVerification(auth)
        .then(() => {
          console.log('check inbox')
        });
      Swal.fire({
        title: "Good job!",
        text: "Account Created",
        icon: "success",
      });
    }) .catch((error) => {
       console.log(error)
      });
    
  };

  return (
    <div className="">
      <h2 className="text-center text-5xl font-bold text-second-color">
        Register
      </h2>
      <form onSubmit={handleSignUp} className="card-body lg:w-1/2 mx-auto">
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="">
            Already Have Account ?{" "}
            <Link to="/login" className="text-primary-color">
              Login
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
