import React, { useContext } from 'react';

import { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {AuthContext} from '../Provider/Authprovider'

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();console.log(location.pathname)

    if(loading){
        return <span className='loading loading-infinity loading-lg'></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname}to='/login'></Navigate>;
       
};

export default PrivateRoute;