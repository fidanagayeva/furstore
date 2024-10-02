import React from 'react';

const Lamp = () => {
  return (
    <div className="flex flex-col mt-10 lg:flex-row px-2 lg:px-6 items-start justify-between w-full">
      <div className="relative flex items-center justify-center w-full lg:w-1/2 overflow-hidden">
        <img 
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-4_1080x.jpg?v=1703662421" 
          alt="" 
          className="w-full h-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div className="absolute inset-y-0 right-0 flex flex-col items-start top-28 text-left max-w-[45%]">
          <h2 className="text-4xl lg:text-3xl text-black mb-2 lg:mb-4">Hanging Lamp</h2>
          <p className="text-[0.9rem] lg:text-gray-600 mb-4 lg:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod torus tempor incididunt.
          </p>
          <button className="bg-[#0a5d5d] text-white py-2 lg:py-3 px-4 lg:px-6 hover:bg-teal-700">
            Shop Now
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 lg:p-6 flex flex-col items-start justify-start overflow-hidden">
          <h3 className="text-2xl font-sans text-black mb-4">Plants</h3>
          <p className="text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod torus tempor incididunt.
          </p>
          <img 
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-6_768x.jpg?v=1703662419" 
            alt="" 
            className="w-[200px] h-[200px] object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="p-4 lg:p-6 flex flex-col items-start justify-start overflow-hidden">
          <img 
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-5_768x.jpg?v=1703662419" 
            alt="" 
            className="w-[200px] h-[200px] object-contain mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <h3 className="text-2xl font-sans text-black mb-4">Clockwatcher</h3>
          <p className="text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod torus tempor incididunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lamp;
