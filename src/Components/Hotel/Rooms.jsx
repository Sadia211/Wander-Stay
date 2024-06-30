import React, { useState, useEffect } from 'react';
import Roomcard from '../Roomcard/Roomcard';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Rooms = () => {
  const { hotel } = useParams();
  const [roomss, setRooms] = useState([]);
  
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        console.log(`Fetching rooms for hotel: ${hotel}`);
        const response = await fetch(`http://localhost:5000/hotels/${encodeURIComponent(hotel)}`);
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched rooms:', data);
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
        setRooms([]);
      }
    };
    fetchRooms();
  }, [hotel]);

  return (
    <div>
      <Navbar />
      <div className='m-10'>
        <h1 className='text-5xl font-vollkorn text-center py-10'>{hotel}</h1>
       
          {roomss.length === 0 ? (
            <h1 className='text-2xl font-vollkorn text-center py-10 items-center'>
              Oops! No rooms found for {hotel}
            </h1>
          ) : (
            roomss.map((rooms) => (
              <Roomcard
                key={rooms._id}
                rooms={rooms}
              />
            ))
          )}
        </div>
      </div>
    
  );
};

export default Rooms;
