import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Profile || Universal Estate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full md:w-96">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body space-y-3">
              <img
                src={user?.photoURL}
                className="mx-auto rounded-full size-36"
                alt=""
              />
              <h1 className="font-bold md:text-2xl text-xl text-center">Name: {user?.displayName}</h1>
              <p className="font-semibold text-center">Email: {user?.email}</p>

              <Link className="btn hover:bg-emerald-600 hover:text-white bg-emerald-400" to={"/updateProfile"}>Update Profile?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
