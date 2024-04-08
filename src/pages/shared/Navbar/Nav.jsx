import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLink = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar px-0 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Universal Estate Network</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <img className="h-8 rounded-full mr-2" src="" alt="" />
          <button className="btn hidden md:block">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
