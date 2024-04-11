import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import {Navigate, useLocation} from 'react-router-dom'

const PrivateRouter = ({children}) => {
  const {user, loader} = useContext(AuthContext);
  const location = useLocation();
  console.log(location)

  if(loader){
    return <img src="https://i.ibb.co/Mg6Rvtx/loader.gif" className='mx-auto' alt="" />
  }

  if(user){
    return children;
  }

  return <Navigate state={location.pathname} to={"/signIn"}></Navigate>
}

export default PrivateRouter
