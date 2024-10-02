import React from 'react';
import { FaFacebookF, FaPinterestP, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="col-span-1">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223&width=160"
            alt="FurStore Logo"
            className="w-auto h-10 mb-6" 
          />
          <div className="text-gray-600 space-y-3">
            <p className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">2357 Gordon Street, CA</p>
            <p className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">0123 456 789</p>
            <p className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">demo@gmail.com</p>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="font-semibold text-gray-700 mb-6 text-xl">About us</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">Our story</li>
            <li className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">Our team</li>
            <li className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">Designers</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-semibold text-gray-700 mb-6 text-xl">Customer service</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">Home</li>
            <li className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">Products</li>
            <li className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">Contacts</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-semibold text-gray-700 mb-6 text-xl">Support</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">FAQ's</li>
            <li className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">Shipping</li>
            <li className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">Return</li>
          </ul>
        </div>

        <div className="col-span-1 space-y-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-6 text-xl">Payments</h4>
            <div className="flex space-x-2">
              <img
                src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-2-7_250x.png?v=1696490455"
                alt=""
                className="w-40 h-5"
              />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-6 text-xl">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                <FaPinterestP />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 text-center text-gray-600">
        <p className="text-base font-semibold hover:text-teal-600 transition-colors duration-300">
          Copyright © 2023 Vinovathemes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
