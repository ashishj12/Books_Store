import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from "react-router-dom"

const PrivateRouter = ({ children }) => { // Destructured `children`
    const { currentUser,loading } = useAuth();
    if(loading){
      return <div>Loading...</div>
    }
    if (currentUser) {
        return children; // Corrected to return children
    }
  return <Navigate to="/login" replace /> // Redirect to login if not authenticated
}

export default PrivateRouter;
