import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = (e)=>{
        e.preventDefault();
   
         const name = e.target.name.value;
         const photo = e.target.photo.value;
         const email = e.target.email.value;
         const password = e.target.password.value;
   
       
   
     }
     return (
       <>
       <div className="hero min-h-screen bg-base-200">
         <div className="hero-content w-full md:w-96">
           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <form onSubmit={handleSignUp} className="card-body">
             <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Name</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Name"
                   name="name"
                   className="input input-bordered"
                   required
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
                   required
                 />
               </div>
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
                 <input
                   type="password"
                   placeholder="password"
                   name="password"
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
                 <button className="btn btn-primary">Sign Up</button>
               </div>
             <p>Already have an account? <Link to={"/signIn"} className="text-blue-500 underline">Sign In</Link></p>
             </form>
           </div>
         </div>
       </div>
    </>
  )
}

export default SignUp
