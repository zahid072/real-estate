import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#282727] ">
      <div className="py-5 px-10 border-b flex md:flex-row flex-col justify-between items-center">
        <img
          src="https://i.ibb.co/dP8Ww89/estate-white.png"
          className="lg:h-20 h-12"
          alt=""
        />
        <div className="text-white text-2xl flex md:mt-0 mt-5 gap-5">
          <FaFacebook/>
          <FaTwitter />
          <FaGithub />
          <FaLinkedin/>
        </div>
      </div>
      <footer className="footer p-10  text-white">
        <nav>
          <h6 className="footer-title text-2xl">Get In Touch</h6>
          <a className="link link-hover"><p className=" text-xl flex gap-3">
          <FaLocationDot className="text-emerald-500 text-center text-xl " />
          <span className="text-xl">The Grove, Los Angeles, CA</span>
        </p></a>
          <a className="link link-hover"><p className=" text-xl flex gap-3">
          <BsTelephone className="text-emerald-500 text-center text-xl " />
          <span className="text-xl">endrokark33@gmail.com</span>
        </p></a>
          <a className="link link-hover"><p className=" text-xl flex gap-3">
          <MdOutlineMailOutline className="text-emerald-500 text-center text-xl " />
          <span className="text-xl">+0885455541</span>
        </p></a>
        </nav>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <Link to={"/"} className="link link-hover">Home</Link>
          <Link to={"/contact"} className="link link-hover">Contact</Link>
          <Link to={"/favorite"} className="link link-hover">Favorite</Link>
          <Link to={"/signIn"} className="link link-hover">Sign In</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="py-5 border-y px-10 flex md:flex-row flex-col items-center text-white justify-between">
          <h1 className="text-2xl font-semibold flex gap-2"><IoIosMailOpen className="text-emerald-500 text-center text-2xl"/> NEWSLETTER</h1>
          <div className="md:mt-0 mt-4 flex md:gap-5 gap-2">
            <input className="input bg-transparent border border-emerald-500  focus:border-emerald-500 " type="email" placeholder="E-mail Address" />
            <button className="btn text-emerald-500 border border-emerald-500 bg-transparent hover:bg-transparent">Subscribe</button>
          </div>
      </div>
      <footer className="footer px-10 py-4 border-t bg-[#373737] text-white border-base-300">
        <aside className="items-center grid-flow-col">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
          All rights reserved. © 2024 Universal estates network.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
