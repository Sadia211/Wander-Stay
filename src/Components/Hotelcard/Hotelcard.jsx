import React from 'react';
import { Link } from 'react-router-dom';

const Hotelcard = ({ hotel }) => {
  const { id, hotels, image, description } = hotel;

  return (
    <div className="hero bg-base-100 h-60 mb-6 flex  font-poppins">
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start">
        <img src={image} alt={hotels} className="max-w-sm h-60 w-60 shadow-2xl" />
        <div className="lg:ml-4 mt-4 lg:mt-0 mx-10">
          <h1 className="text-2xl  my-2 ">{hotels}</h1>
          <p className="py-2 w-96">{description}</p>
          <Link to={`/hotels/${encodeURIComponent(hotels)}`}>
          <div className='underline'>View Rooms</div> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotelcard;
