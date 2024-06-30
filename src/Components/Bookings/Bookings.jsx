import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import BookingRow from './BookingRow';
import Navbar from '../Shared/Navbar';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            const url = `/bookings?email=${user.email}`;
            axiosSecure.get(url, { withCredentials: true })
                .then(res => {
                    setBookings(res.data);
                })
                .catch(error => {
                    console.error('Error fetching bookings:', error);
                    setBookings([]); // Optionally set bookings to an empty array on error
                });
        }
    }, [user, axiosSecure]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://hotel-server-nine.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
                .catch(error => console.error('Error deleting booking:', error));
        }
    }

    return (
        <div>
            <Navbar />
            <h2 className="text-3xl font-poppins">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Suite</th>
                            <th>Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;