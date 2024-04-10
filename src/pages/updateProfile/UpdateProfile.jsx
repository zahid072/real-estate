import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const Navigate = useNavigate();
  const [error, setError] = useState("");

  const { updateUserProfile, user } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    if (!user) {
      Navigate("/signIn");
      return;
    }
    if (!name && !photo) {
      setError(`Please provide "name" or "photo url"`);
      return
    }
    setError("");
    updateUserProfile(name, photo)
      .then(() => {
        toast.success("Successfully updated");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full md:w-96">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateProfile} className="card-body">
              <h1 className="text-3xl font-bold text-center">
                Update your name and image
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
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
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">save</button>
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
