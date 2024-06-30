import React from 'react'
import ReactDOM from 'react-dom/client'

import Roomdetails from '../Hotelcard/Roomdetails.jsx'
import Home from '../../Components/Home/Home.jsx'
import Login from '../../Components/Login/Login.jsx'
import Register from '../../Components/Register/Register.jsx'
import Hotel from '../../Components/Hotel/Hotel.jsx'

import Bookings from '../Bookings/Bookings.jsx'
import Rooms from '../Hotel/Rooms.jsx'
import PrivateRoute from "../routes/PrivateRoute.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:()=>fetch("./testimonial.json")
  },
{
  path:"/hotels/:hotel",
  element:<Rooms></Rooms>,
loader:({params})=>fetch(`https://hotel-server-nine.vercel.app/hotels/${params.hotel}`)
},
  {
    path: "/hotels",
    element: <Hotel></Hotel>,
    loader:({params})=>fetch('https://hotel-server-nine.vercel.app/hotels')},

  {
  path: "/hotels/:hotel/:room",
  element: <PrivateRoute><Roomdetails></Roomdetails></PrivateRoute>,
  loader: ({ params }) => fetch(`hhttps://hotel-server-nine.vercel.app/hotels/${params.hotel}/${params.room}`)
},
 
 {path:'/login',
  element:<Login></Login>
  },
  {path:'/register',
  element:<Register></Register>
  },
  {
    path: '/bookings', 
    element: <Bookings></Bookings>
  }

]);
export default router;