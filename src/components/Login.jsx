import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Login = () => {

           const {signInUser,signUpUser} = useContext(AuthContext)


          const handleLogin =(e)=>{

            e.preventDefault();


            const form = e.target;

             const email = form.email.value;
             const password = form.password.value;

           
              signInUser(email,password)
              .then(res=>{
                   const user = res.user;
                   console.log(user)

                Swal.fire({
                    title: "Good job!",
                    text: "Your are logged",
                    icon: "success",
                })
            }).catch((error) => {
                console.log(error)
               });
            
             

          }



    return (
        <div className=''>
            <h2 className="text-center text-5xl font-bold text-second-color">Login Now</h2>
            <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="">Already Login Done? <Link to="/register" className='text-primary-color'>Register</Link></button>
        </div>

      </form>  
        </div>
    );
};

export default Login;