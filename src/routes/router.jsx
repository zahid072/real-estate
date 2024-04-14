import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import About from "../pages/about/About";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import PrivateRouter from "./PrivateRouter";
import EstateDetails from "../pages/estateDetails/EstateDetails";
import UserProfile from "../pages/userProfile/UserProfile";
import Favorite from "../pages/Favorite/Favorite";

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
        path: "/about",
        element: <About />,
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
