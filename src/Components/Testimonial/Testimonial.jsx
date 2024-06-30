import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useLoaderData } from 'react-router-dom';

const Testimonial = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const reviews = useLoaderData();

  useEffect(() => {
    fetch('./testimonial.json')
      .then(res => res.json())
      .then(data => {
        // Assuming useLoaderData sets the data correctly
      });
  }, []);

  return (
    <>
      <div className='my-20 mt-32'>
        <h1 className='text-4xl font-poppins text-center mt-20 mb-5 font-bold'>What our clients say</h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className='p-20 border rounded-lg h-60 '>
              <h3 className='text-2xl  text-center'>{review.name}</h3>
                <Rating 
                  className='mx-auto mb-4'
                  style={{ maxWidth: 180 }}
                  value={review.rating} 
                  readOnly 
                  max={5} // Assuming maximum rating is 5 stars
                />
               
                <p className='px-4'>{review.testimonial}</p>
                <p className='text-center text-sm text-gray-500'>{review.hotelName}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={progressCircle} className="autoplay-progress" style={{ position: 'relative', width: '90%', height: '10px', background: 'rgba(0,0,0,0.1)', borderRadius: '5px', overflow: 'hidden', margin: '0 auto' }}>
          <div ref={progressContent} style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', transform: 'scaleX(var(--progress))', transformOrigin: 'left', transition: 'transform 0.25s' }}>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
