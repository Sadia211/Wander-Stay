import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-lvh bg-black">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/WgfFM7R/8042858.jpg" className="w-full  bg-black opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <div className='text-center text-2xl font-poppins text-white'>
                        <h1 className='text-4xl text-white font-vollkorn font-bold mb-2'>Experience Cox's Bazar</h1>
                            <p className='text-3xl'>
                            Book Your Stay in Cox's Bazar for Unforgettable Beachfront Experiences!
                            </p>   
                           
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/J7R9222/edvin-johansson-rlw-E8f8an-Oc-unsplash.jpg" className="w-full  bg-black opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <div className='text-center text-2xl font-poppins text-white'>
                            <h1 className='text-5xl text-white font-vollkorn font-bold mb-2'>Family Fun Deal</h1>
                            <p>
                                Planning a family vacation? Enjoy our exclusive Family Fun Deal! 
                                Book two rooms for your family and get 50% off the second room.
                            </p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/5smfj4k/pexels-maria-salazar-879010.jpg" className="w-full  bg-black opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <div className='text-center text-2xl font-poppins text-white'>
                            <h1 className='text-5xl text-white font-vollkorn font-bold mb-2'>Early Bird Special</h1>
                            <p>
                                Book your stay in advance and enjoy exclusive discounts! 
                                Reserve your room at least 30 days before your check-in date to receive a 15% discount.
                            </p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Banner;
