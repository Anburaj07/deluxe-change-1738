import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

    let token=localStorage.getItem('frontendtoken');
    console.log(token);
    const loaction = useLocation()

    return (
        <>
            {
                token ? children : <Navigate to="/signin" state={loaction.pathname} replace={true} />
            }
        </>
    )
}