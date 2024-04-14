
import { Outlet } from "react-router-dom";
import Nav from "../pages/shared/Navbar/Nav";
import Footer from "../pages/shared/footer/Footer";


const Layout = () => {
      
  return (
    <div className="font-poppins bg-[#f5f5f5]">
      <div className=" z-50 lg:mx-auto mx-2 bg-base-100">
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
