import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const HomeSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <Swiper
      spaceBetween={0} 
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={handleSlideChange}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className={`relative h-screen ${currentSlide === 0 ? 'slide-active' : ''}`}>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-1_1512x.jpg?v=1703653285"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
            <div className="w-1/2 ml-10">
              <h1 className={`text-5xl font-sans text-black animate-slideLeft`}>
                IMMERSE YOURSELF IN OUR SPECTACULAR FURNITURE COLLECTION
              </h1>
              <p className={`mt-4 text-xl text-black animate-slideRight`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className={`mt-6 px-5 py-3 bg-[#0a5d5d] text-white hover:bg-green-800 animate-slideRight`}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={`relative h-screen ${currentSlide === 1 ? 'slide-active' : ''}`}>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-2_1512x.jpg?v=1703750459"
            alt="Modern Furniture"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
            <h1 className={`text-5xl font-sans text-black animate-slideUp`}>
              Discover Exceptional Furniture
            </h1>
            <p className={`mt-4 text-2xl text-black animate-slideUp`}>
              Designs for Every Style
            </p>
            <button className={`mt-6 px-5 py-3 bg-[#0a5d5d] text-white hover:bg-green-800 animate-slideRight`}>
                Learn More
              </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={`relative h-screen ${currentSlide === 2 ? 'slide-active' : ''}`}>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-3_1512x.jpg?v=1703750458"
            alt="Exclusive Collection"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end">
            <div className="w-1/2 mr-10 text-right">
              <h1 className={`text-5xl font-sans text-black animate-slideLeft`}>
                Enhance Your Space with Style and Function
              </h1>
              <p className={`mt-4 text-2xl text-black animate-slideRight`}>
                Upgrade your living space effortlessly
              </p>
              <button className={`mt-6 px-5 py-3 bg-[#0a5d5d] text-white hover:bg-green-800 animate-slideRight`}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSwiper;
