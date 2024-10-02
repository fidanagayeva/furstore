import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; 

const NewArrivals = () => {
  const products = [
    { id: 1, title: "Fiamond Halo Stud Doneco", price: "$375.00", oldPrice: "$399.00", discount: "-54%", imgSrc: "https://vinova-furstore.myshopify.com/cdn/shop/products/40a_540x.jpg?v=1694677930", rating: 0 },
    { id: 2, title: "Biamond Halo Stud Aenean", price: "$300.00", rating: 4, imgSrc: "https://vinova-furstore.myshopify.com/cdn/shop/products/2a_1dae4acc-3f60-44d2-a5cd-d85d36709d25_540x.jpg?v=1694678246" },
    { id: 3, title: "Diamond Halo Stud Aenean", price: "$369.00", rating: 5, imgSrc: "https://vinova-furstore.myshopify.com/cdn/shop/products/1a_72f2474e-7e99-45e6-96e5-ddda5fc59906_540x.jpg?v=1694678001" },
    { id: 4, title: "Chair", price: "$299.00", discount: "-64%", imgSrc: "https://vinova-furstore.myshopify.com/cdn/shop/products/4a_360x.jpg?v=1694678030", rating: 0 },
    { id: 5, title: "Plant Pot", price: "$150.00", discount: "-45%", imgSrc: "https://vinova-furstore.myshopify.com/cdn/shop/products/5a_360x.jpg?v=1694678021", rating: 0 },
    { id: 6, title: "Vase", price: "$120.00", imgSrc: "https://vinova-furstore.myshopify.com/cdn/shop/products/3a_540x.jpg?v=1694678220", rating: 0 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-4">New Arrivals</h2>
      <p className="text-center text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          className="col-span-1 bg-cover bg-center flex justify-start items-start p-10 text-black h-[55rem]"
          style={{ backgroundImage: "url('https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-7_768x.jpg?v=1703739528')" }}
        >
          <div className="text-left mt-8">
            <h3 className="text-3xl font-sans mb-4">NEW ARMCHAIR COLLECTION</h3>
            <button className="px-6 py-3 bg-white text-black hover:bg-black hover:text-white">Shop Now</button>
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-6 bg-white relative border-white">
              {product.discount && (
                <span className="absolute top-10 left-10 bg-red-500 text-white px-2 py-1 text-xs">
                  {product.discount}
                </span>
              )}

              <img src={product.imgSrc} alt={product.title} className="w-full h-[17rem] object-cover mb-4 border border-white" />

              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, index) => (
                  index < product.rating ? (
                    <FaStar key={index} className="text-yellow-500" />
                  ) : (
                    <FaRegStar key={index} className="text-gray-300" />
                  )
                ))}
              </div>

              <h4 className="text-lg font-sans text-center mb-2">{product.title}</h4>
              <div className="flex justify-center items-center space-x-2">
                <span className="text-lg font-sans">{product.price}</span>
                {product.oldPrice && <span className="line-through text-gray-500">{product.oldPrice}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
