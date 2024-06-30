import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState,useEffect ,useContext} from 'react';
import { AuthContext } from '../Provider/Authprovider';
const Navbar = () => {
 
  const {user,logOut}=useContext(AuthContext)
const handlelogout=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>console.log(error))
}



   const navLinks=<>
   
     <li  className='font-poppins'>  
     <nav id="sidebar">
     <NavLink to="/" className="nav-link" > Home</NavLink></nav></li>   
       
      
      {user?.email?<>
      <li className='font-poppins'> <NavLink to='/bookings' className="nav-link">Bookings</NavLink></li>
       <li className='font-poppins'> <button onClick={handlelogout}>Logout</button></li>
      </>: <li className='font-poppins'> <NavLink to='/login' className="nav-link">Login</NavLink></li>}
    </>
    
    
    return (        <div className="sticky navbar">
  <div className="navbar-start">
    <div className="dropdown">
      
    
    </div>
   <img className='h-16 w-32' src='https://i.ibb.co/9vpM2Q8/logo.png'></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
 

</div>    
       
    );
};

export default Navbar;