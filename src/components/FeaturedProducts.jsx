import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaShoppingCart, FaStar, FaImage } from 'react-icons/fa';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3001/featuredProducts')
      .then((response) => response.json())
      .then((data) => setFeaturedProducts(data))
      .catch((error) => console.error('Error fetching featured products:', error));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="w-full p-4 md:p-6">
      <h2 className="text-center text-2xl md:text-4xl mb-4 md:mb-8">Featured Products</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        grabCursor={true}
        className="mySwiper"
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative group bg-white border-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[200px] md:h-[250px] object-cover"
              />
              <div className="mt-4 text-left px-2 md:px-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm md:text-lg font-bold">{product.name}</h3>
                  <div className="flex items-center ml-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`${
                          product.rating > index ? 'text-yellow-500' : 'text-gray-100'
                        } text-sm md:text-lg`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4 mt-2">
                  <p className="text-sm md:text-xl text-gray-700">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-xs md:text-sm text-red-500 line-through">
                      {product.oldPrice}
                    </p>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-2 md:space-x-4">
                  <button className="p-2 md:p-3 bg-white rounded-full shadow-lg transition-all group-hover:bg-white group-hover:text-gray-700">
                    <FaShoppingCart className="text-gray-700 text-lg md:text-xl" />
                  </button>
                  <button className="p-2 md:p-3 bg-white rounded-full shadow-lg transition-all group-hover:bg-white group-hover:text-gray-700">
                    <FaStar className="text-gray-700 text-lg md:text-xl" />
                  </button>
                  <button
                    className="p-2 md:p-3 bg-white rounded-full shadow-lg transition-all group-hover:bg-white group-hover:text-gray-700"
                    onClick={() => openModal(product)}
                  >
                    <FaImage className="text-gray-700 text-lg md:text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 md:p-8 w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl md:text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 flex items-center justify-center mb-4 lg:mb-0">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-contain"
                />
              </div>

              <div className="w-full lg:w-1/2 pl-2 md:pl-4">
                <h3 className="text-xl md:text-3xl font-bold mb-2">{selectedProduct.name}</h3>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`${
                        selectedProduct.rating > index ? 'text-yellow-500' : 'text-gray-100'
                      } text-lg`}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-2 md:space-x-4 mb-4">
                  <p className="text-xl md:text-3xl font-bold text-black">{selectedProduct.price}</p>
                  {selectedProduct.oldPrice && (
                    <p className="text-sm md:text-lg text-gray-400 line-through">
                      {selectedProduct.oldPrice}
                    </p>
                  )}
                </div>
                <p className="text-xs md:text-sm text-gray-500 mb-4">
                  SKU: <span className="text-gray-700">E-00407</span>
                </p>
                <p className="text-xs md:text-sm text-gray-500 mb-4">
                  Category: <span className="text-gray-700">Armchair, Sofa, Tables</span>
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      className="px-2 py-1"
                      onClick={decreaseQuantity}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="w-8 md:w-12 text-center border-l border-r border-gray-300"
                      value={quantity}
                      readOnly
                    />
                    <button className="px-2 py-1" onClick={increaseQuantity}>
                      +
                    </button>
                  </div>
                  <button className="bg-[#0a5d5d] text-white w-[10rem] md:w-[15rem] py-2 px-4 md:px-6 ml-2 md:ml-4 hover:bg-teal-600">
                    Add To Bag
                  </button>
                </div>

                <button className="w-full text-center py-2 px-4 md:px-6 border border-gray-300 hover:text-white hover:bg-[#0a5d5d]">
                  Buy It Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
