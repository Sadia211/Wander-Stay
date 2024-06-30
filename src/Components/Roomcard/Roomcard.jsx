import React from 'react';
import { Link } from 'react-router-dom';

const Roomcard = ({ rooms }) => {
  const { _id,hotel, room, room_description, room_size,price,image } = rooms;

  return (
    <div className="hero bg-base-100 h-60 mb-6 flex  font-poppins">
      <div className="hero-content flex flex-col gap-3 lg:flex-row items-center lg:items-start">
        <img src={image} className="max-w-sm h-60 w-72 shadow-2xl" />
        <div className="lg:ml-4 mt-4 lg:mt-0 mx-10">
          <h1 className="text-2xl  my-2 ">{room}</h1>
          <div className='className="py-2 w-96'>
          <p>{room_description}</p>
          <p>Size: {room_size}</p>
          <p>Price: {price}</p></div>
          <Link to={`/hotels/${hotel}/${room}`}>
          <div className='underline font-blue'>Book now</div> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roomcard;
