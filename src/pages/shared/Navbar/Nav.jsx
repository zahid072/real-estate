import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
  };
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/updateProfile"}>Update Profile</NavLink>
      </li>

      <li>
        <NavLink to={"/favorite"}>Favorite</NavLink>
      </li>

      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar px-0 max-w-[1490px] mx-auto bg-base-100 mt-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-11  mr-2"
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

              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn md:hidden mt-2 block bg-emerald-400 hover:bg-emerald-600 hover:text-white"
                >
                  Sign Out
                </button>
              ) : (
                <Link to={"/signIn"}>
                  <button className="btn mt-2 bg-emerald-400 hover:bg-emerald-600 hover:text-white md:hidden block">
                    Sign In
                  </button>
                </Link>
              )}
            </ul>
          </div>

          <img
            src="https://i.ibb.co/Zxb9JWv/logo2.png"
            className="lg:h-20 h-12"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div
              className=" tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                className="size-12 cursor-pointer rounded-full mr-3"
                src={
                  (user?.photoURL && user?.photoURL) ||
                  "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
                }
                alt=""
              />
            </div>
          )}

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn hidden md:block bg-emerald-400 hover:bg-emerald-600 hover:text-white"
            >
              Sign Out
            </button>
          ) : (
            <Link to={"/signIn"}>
              <button className="btn hidden bg-emerald-400 hover:bg-emerald-600 hover:text-white md:block">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
