import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export const PrivateRouter = ({children}) =>{
    const [token,setToken] = useState(localStorage.getItem('token'))
    console.log('private')
    return (    
        <div>
            { (token) ?  children : <Navigate to="user-pages/login-1"/>}
            PrivateRouter
        </div>
    )   
}