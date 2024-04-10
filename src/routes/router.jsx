
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import About from '../pages/about/About'
import UpdateProfile from '../pages/updateProfile/UpdateProfile'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/updateProfile",
                element:<UpdateProfile/>
            },
            {
                path:"/signIn",
                element:<SignIn/>
            },
            {
                path:"/signUp",
                element:<SignUp/>
            },
           
        ]
    }
])
export default router
