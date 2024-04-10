import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import {Navigate} from 'react-router-dom'

const PrivateRouter = ({children}) => {
  const {user, loader} = useContext(AuthContext);

  return <Navigate to={"/signIn"}></Navigate>
}

export default PrivateRouter
