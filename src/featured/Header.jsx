import React from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex lg:hidden items-center space-x-4">
          <div className="p-2 rounded-full hover:bg-gray-200 transition duration-300">
            <FaBars
              className="text-xl cursor-pointer transition-colors duration-300"
              onClick={toggleSidebar}
            />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 transition duration-300">
            <FaSearch className="text-xl cursor-pointer transition-colors duration-300" />
          </div>
        </div>
        <div className="flex items-center mx-auto lg:mx-0">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223&width=160"
            alt=""
            className="w-auto h-10"
          />
        </div>

        <div className="flex lg:hidden items-center">
          <div className="relative p-2 rounded-full hover:bg-gray-200 transition duration-300">
            <FaShoppingCart className="text-xl cursor-pointer transition-colors duration-300" />
            <span className="absolute -top-2 -right-3 bg-teal-600 text-white rounded-full text-xs px-2 py-1">
              0
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex space-x-8 items-center w-full">
          <div className="flex-grow flex justify-center space-x-8">
            {['HOME', 'COLLECTION', 'PRODUCTS', 'OTHER PAGES', 'BLOG'].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`text-gray-700 hover:text-teal-600 transition-colors duration-300 ${item === 'HOME' ? 'text-teal-600 font-bold' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex space-x-6 items-center">
            <div className="p-2 rounded-full hover:bg-gray-200 transition duration-300">
              <FaSearch className="text-xl cursor-pointer transition-colors duration-300" />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 transition duration-300">
              <FaUser className="text-xl cursor-pointer transition-colors duration-300" />
            </div>
            <div className="relative p-2 rounded-full hover:bg-gray-200 transition duration-300">
              <FaShoppingCart className="text-xl cursor-pointer transition-colors duration-300" />
              <span className="absolute -top-2 -right-3 bg-teal-600 text-white rounded-full text-xs px-2 py-1">
                0
              </span>
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 transition duration-300">
              <FaBars
                className="text-xl cursor-pointer transition-colors duration-300"
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
