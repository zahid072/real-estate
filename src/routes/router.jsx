import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import PrivateRouter from "./PrivateRouter";
import EstateDetails from "../pages/estateDetails/EstateDetails";

import Favorite from "../pages/Favorite/Favorite";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element:<Contact/> ,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRouter>
            <UpdateProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/favorite",
        element: (
          <PrivateRouter>
            <Favorite/>
          </PrivateRouter>
        ),
      },
      {
        path: "/estateDetails/:estateId",
        element: (
          <PrivateRouter>
            <EstateDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
