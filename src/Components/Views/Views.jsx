import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Views = () => {
    return (
       
        <>
         <div className='mx-10 mt-20'>
         <h1 className='text-4xl font-poppins text-center my-7 font-bold'> Explore the Beauty of Cox's Bazar</h1>
         <p className='font-poppins text-center my-7'>
         Immerse yourself in breathtaking views of the world's longest natural sea beach. <br></br>
         Discover stunning sunsets, serene landscapes, and vibrant local culture.
         </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      > 
      <SwiperSlide><img className="h-80"src={"https://i.ibb.co/zbxzLP5/9508611.jpg"}/></SwiperSlide>
      <SwiperSlide><img className="h-80"src={"https://i.ibb.co/kKsw0H9/9508585.jpg"}/></SwiperSlide>
       
 <SwiperSlide><img className="h-80"src={"https://i.ibb.co/hdFkk4d/9508617.jpg"}/></SwiperSlide>
 <SwiperSlide><img className="h-80"src={"https://i.ibb.co/Tbj81Zs/fareed-akhyear-chowdhury-4-Hzkb2-PVo-M8-unsplash.jpg"}/></SwiperSlide>
        <SwiperSlide><img className="h-80"src={"https://i.ibb.co/CzMpJ9x/9508592.jpg"}/></SwiperSlide>
      </Swiper>
      </div>
    </>
    );
};

export default Views;