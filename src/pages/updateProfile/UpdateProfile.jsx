import React from 'react'

const UpdateProfile = () => {

    const handleUpdateProfile = (e)=>{
        e.preventDefault();
         const name = e.target.name.value;
         const photo = e.target.photo.value;
   
     }
  return (
    <>
       <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full md:w-96">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateProfile} className="card-body">
              <h1 className="text-3xl font-bold text-center">Update your name and image</h1>
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
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile
