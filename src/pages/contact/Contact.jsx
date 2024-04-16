import React from "react";
import { Helmet } from "react-helmet";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact || Universal Estate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center py-24 bg-gradient-to-r text-white from-[#30424E] to-[#5C8392] rounded">
        Contact
      </h1>
      <div className="flex md:flex-row flex-col *:cursor-pointer pl-10 w-full justify-evenly gap-8 py-10">
        <p className=" md:text-3xl flex md:flex-col flex-row gap-5">
          <FaLocationDot className="text-emerald-500 text-center md:text-5xl text-3xl md:ml-7" />
          <span>Location</span>
          <span className="text-xl">The Grove, Los Angeles, CA</span>
        </p>
        <p className="text-center md:text-3xl flex md:flex-col flex-row gap-5">
          <BsTelephone className="text-emerald-500 text-center md:text-5xl text-3xl md:ml-5" />
          <span>Phone</span>
          <span className="text-xl">+958545556</span>
        </p>
        <p className=" md:text-3xl flex md:flex-col flex-row gap-5">
          {" "}
          <MdOutlineMailOutline className="text-emerald-500 text-center md:text-5xl text-3xl md:ml-2" />
          <span>Email</span>{" "}
          <span className="text-xl">jahidhasan@gmail.com</span>
        </p>
      </div>

      <div>
        <h1 className="text-center md:text-5xl text-2xl font-bold ">
          Send a <span className="text-[#5C8392]">message</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-500 text-center mt-5">
          Connect with us at Estates for expert assistance in navigating the
          commercial real estate market. Whether you're looking to lease, buy,
          or sell, our experienced team is here to guide you every step of the
          way. Reach out today to start your journey towards property success.
        </p>
        <form className=" p-10 max-w-4xl mx-auto">
          <div className="flex md:flex-row flex-col gap-5 *:w-full *:border *:border-gray-300">
            <input
              className="input"
              placeholder="Full Name"
              type="text"
              required
            />
            <input
              className="input"
              placeholder="Email"
              type="email"
              required
            />
            <input
              className="input"
              placeholder="Phone"
              type="number"
              required
            />
          </div>
          <textarea
            name=""
            className="w-full my-5 rounded textarea border border-gray-300"
            placeholder="Message"
            cols="30"
            rows="5"
          ></textarea>
          <div className="flex justify-center">
            <button className="btn btn-accent">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
