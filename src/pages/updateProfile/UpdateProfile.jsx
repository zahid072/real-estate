import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import {Helmet} from "react-helmet";


const UpdateProfile = () => {
  const [error, setError] = useState("");
  const { updateUserProfile, user} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.displayName,
      photoURL: user?.photoURL,
    },
  });

  const handleUpdateProfile = (data) => {
    const name = data.fullName;
    const photo = data.photoURL;

    if (!name && !photo) {
      setError(`Please provide either "name" or "photo url".`);
      return;
    }
  setError("")
    updateUserProfile(name, photo)
    .then(() => {
       toast.success("Successfully updated.");
     })
     .catch((err) => {
       toast.error(err.message);
     });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Profile || Universal Estate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full md:w-96">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleUpdateProfile)} className="card-body">
              <h1 className="text-3xl font-bold text-center">
                Update Your Profile
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("fullName")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-xl">Save</button>
              </div>
              <p className="text-red-500">{error}</p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UpdateProfile;
