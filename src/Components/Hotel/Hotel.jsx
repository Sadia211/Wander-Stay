import React, { useState, useEffect } from 'react';
import Hotelcard from '../Hotelcard/Hotelcard';

const Hotel = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('./Hotels.json')
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  return (
    <div className='mt-20 mx-10 mb-10'>
      <h1 className='text-4xl font-poppins text-center my-7 font-bold'>Book hotels for your next trip</h1>
      {hotels.map(hotel => (
        <Hotelcard
          key={hotel.id}
          hotel={hotel}  // Pass the correct individual hotel object
        />
      ))}
    </div>
  );
};

export default Hotel;
