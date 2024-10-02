import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi'; 

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-white text-lg">{product.name}</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#0a5d5d]">
                <FiArrowRight className="text-[#0a5d5d] hover:text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
