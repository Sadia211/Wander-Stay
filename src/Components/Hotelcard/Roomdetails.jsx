import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { AuthContext } from '../Provider/Authprovider';

const Roomdetails = () => {
  const { hotel } = useParams(); // Get the hotel parameter from the route
  const roomdetails = useLoaderData();
  const { room, image, short_description, price, room_size } = roomdetails;
  const { user } = useContext(AuthContext);

  const handleBookService = async (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: username,
      email,
      img: image, // Using image from room details
      date,
      service: room,
      service_id: roomdetails._id, // Assuming roomdetails has _id
      prices: price // Assuming you want to use the room price
    };

    console.log('Booking details:', booking);

    try {
        const response = await fetch('https://hotel-server-nine.vercel.app/bookings', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      });

    
      const data = await response.json();
      console.log('Server response:', data);

      if (data.insertedId) {
        alert('Service booked successfully');
      }
    } catch (error) {
      console.error('Error booking service:', error);
    }
  };

  return (
    <div className='font-poppins'>
      <Navbar />
      <div className='mx-5 my-10 flex flex-row'>
        <div className='ml-10 pr-20 w-full'>
          <h2 className="text-center text-3xl font-bold font-poppins mb-10">{room}</h2>
         
          <h2 className='text-center text-xl font-poppins font-bold'>Book Now</h2>
          <form onSubmit={handleBookService}>
            <div className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" defaultValue={user?.displayName} name="username" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" name="date" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due amount</span>
                </label>
                <input type="text" defaultValue={price} className="input input-bordered" />
              </div>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary btn-block" type="submit" value="Book now" />
            </div>
          </form>
          <div className="card-body"></div>
        </div>
        <div>
          <img src={image} alt="Room" className='h-80' />
        </div>
      </div>
    </div>
  );
};

export default Roomdetails;
