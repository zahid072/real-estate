import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const SignIn = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { signInUsers, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  // handle all signIn methods
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    setError("");
    // email and password sign in
    signInUsers(email, password)
      .then((res) => {
        toast.success("Sign in successful");
        e.target.email.value = "";
        e.target.password.value = "";
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/invalid-credential).") {
          setError("email or password invalid");
        }
      });
  };
  // google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        toast.success("Sign in successful");
      })
      .catch((err) => {
        console.log("google", err.message);
      });
  };
  // gitHub sighIn
  const handleGitHubSignIn = () => {
   signInWithGitHub()
   .then((res) => {
    const user = res.user;
    toast.success("Sign in successful");
  })
  .catch((err) => {
    console.log("gitHub", err.message);
  });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign In</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full md:w-[600px]">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <div className="card-body">
           <form onSubmit={handleSignIn} className="space-y-3">
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
                        <FaEyeSlash />
                      </span>
                    )}
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="text-red-500">{error}</p>
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
            </form>
            <button
                onClick={handleGoogleSignIn}
                className="btn flex items-center gap-2"
              >
                <FcGoogle className="text-xl" /> Google
              </button>
              <button
                onClick={handleGitHubSignIn}
                className="btn flex items-center gap-2"
              >
                <FaGithub className="text-xl" /> GitHub
              </button>
           </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignIn;
