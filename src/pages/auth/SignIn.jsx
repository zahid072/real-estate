import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const {signInUsers, signInWithGoogle} = useContext(AuthContext);


  const handleShowPass = ()=>{
    setShowPass(!showPass);
  }

  const handleSignIn = (e) => {
   
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

      if(password.length < 6){
        setError("Password at least 6 characters");
        return
      }

      setError("")

    signInUsers(email, password)
    .then(res =>{
      e.target.email.value = "";
      e.target.password.value = "";
    })
    .catch(err =>{
          setError(err.message)
    })
  };
  const handleGoogleSignIn = () => {
   signInWithGoogle()
   .then(res =>{
    const user = res.user;
    
   })
   .catch(err => {
      console.log("google", err.message)
   })
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full md:w-96">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign In</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="w-full flex items-center ">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div onClick={handleShowPass} className="-ml-7">
                    {showPass ? (
                      <span>
                        <FaEye />
                      </span>
                    ) : (
                      <span>
                        <FaEyeSlash/>
                      </span>
                    )}
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="text-red-500">
                  {error}
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link to={"/signUp"} className="text-blue-500 underline">
                  Sign Up
                </Link>
              </p>
              <button
                onClick={handleGoogleSignIn}
                className="btn flex items-center gap-2"
              >
                <FcGoogle /> Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
