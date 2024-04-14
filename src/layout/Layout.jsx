
import { Outlet } from "react-router-dom";
import Nav from "../pages/shared/Navbar/Nav";
import Footer from "../pages/shared/footer/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Layout = () => {
  const {showToast} = useContext(AuthContext)
  useEffect(() => {
    if(showToast){
      toast.success("success")
    }
  }, [showToast]);
      
  return (
    <div className="font-poppins bg-[#f5f5f5]">
      <div className="max-w-[1490px] -z-50 lg:mx-auto mx-2">
        <Nav />
      </div>
      <div className="max-w-[1490px] lg:mx-auto mx-2">
      <ToastContainer/>
        <Outlet />
        
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
};

export default Layout;
