import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../pages/shared/Navbar/Nav";
import Footer from "../pages/shared/footer/Footer";

const Layout = () => {
  return (
    <div className="font-poppins">
      <div className="max-w-[1490px] lg:mx-auto mx-2">
        <Nav />
      </div>
      <div className="max-w-[1490px] lg:mx-auto mx-2">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
