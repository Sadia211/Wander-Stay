import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Shared/Banner';

import Hotelcard from '../Hotelcard/Hotelcard';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

import Marquee from "react-fast-marquee";
import Footer from '../Shared/Footer';
import Testimonial from '../Testimonial/Testimonial';
import Views from '../Views/Views';

import Rooms from '../Hotel/Rooms'
import Hotel from '../Hotel/Hotel';
const Home = () => {
  
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
           
                <Views></Views>
                <Hotel></Hotel>
       
 
 <Testimonial></Testimonial>
       <Footer></Footer></div>
           
        
    );
};

export default Home;