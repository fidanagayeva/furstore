import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedLanguage, setSelectedLanguage] = useState('ENGLISH');

  const [isCurrencyOpen, setCurrencyOpen] = useState(false);
  const [isLanguageOpen, setLanguageOpen] = useState(false);

  const toggleCurrency = () => setCurrencyOpen(!isCurrencyOpen);
  const toggleLanguage = () => setLanguageOpen(!isLanguageOpen);

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setCurrencyOpen(false);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageOpen(false);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-40 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-6 flex justify-end">
        <FiX className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      <div className="p-6">
        <ul className="mb-8 space-y-4">
          <li className="mb-4 cursor-pointer text-gray-700 font-semibold" onClick={toggleSidebar}>Login</li>
          <li className="mb-4 cursor-pointer text-gray-700 font-semibold" onClick={toggleSidebar}>Register</li>
          <li className="mb-4 cursor-pointer text-gray-700 font-semibold" onClick={toggleSidebar}>Wishlist</li>
          <li className="mb-4 cursor-pointer text-gray-700 font-semibold" onClick={toggleSidebar}>Check out</li>
        </ul>

        <hr className="my-6" />

        <div className="mt-8">
          <h3 className="font-semibold mb-2 text-gray-700">CURRENCY</h3>
          <div
            className={`mb-4 p-3 border bg-gray-100 cursor-pointer flex justify-between items-center ${
              isCurrencyOpen ? 'bg-gray-50' : ''
            }`}
            onClick={toggleCurrency}
          >
            <div className="flex items-center">
              <img
                src={`https://flagcdn.com/w20/${selectedCurrency === 'USD' ? 'us' : selectedCurrency === 'EUR' ? 'eu' : 'gb'}.png`}
                alt={selectedCurrency}
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-700 font-semibold">{selectedCurrency}</span>
            </div>
            <FaChevronDown />
          </div>
          {isCurrencyOpen && (
            <div className="flex flex-col p-3 border">
              <div
                className={`flex items-center mb-2 cursor-pointer ${
                  selectedCurrency === 'USD' ? 'font-bold' : ''
                }`}
                onClick={() => handleCurrencySelect('USD')}
              >
                <img src="https://flagcdn.com/w20/us.png" alt="USD" className="w-6 h-6 mr-3" />
                <span className="text-gray-700 font-semibold">USD</span>
              </div>
              <div
                className={`flex items-center mb-2 cursor-pointer ${
                  selectedCurrency === 'EUR' ? 'font-bold' : ''
                }`}
                onClick={() => handleCurrencySelect('EUR')}
              >
                <img src="https://flagcdn.com/w20/eu.png" alt="EUR" className="w-6 h-6 mr-3" />
                <span className="text-gray-700 font-semibold">EUR</span>
              </div>
              <div
                className={`flex items-center cursor-pointer ${
                  selectedCurrency === 'GBP' ? 'font-bold' : ''
                }`}
                onClick={() => handleCurrencySelect('GBP')}
              >
                <img src="https://flagcdn.com/w20/gb.png" alt="GBP" className="w-6 h-6 mr-3" />
                <span className="text-gray-700 font-semibold">GBP</span>
              </div>
            </div>
          )}

          <h3 className="font-semibold mb-2 mt-6 text-gray-700">LANGUAGE</h3>
          <div
            className={`p-3 border rounded cursor-pointer flex justify-between items-center ${
              isLanguageOpen ? 'bg-gray-100' : ''
            }`}
            onClick={toggleLanguage}
          >
            <div className="flex items-center">
              <img
                src={`https://flagcdn.com/w20/${selectedLanguage === 'ENGLISH' ? 'gb' : 'es'}.png`}
                alt={selectedLanguage}
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-700 font-semibold">{selectedLanguage}</span>
            </div>
            <FaChevronDown />
          </div>
          {isLanguageOpen && (
            <div className="flex flex-col p-3 border rounded mt-2">
              <div
                className={`flex items-center mb-2 cursor-pointer ${
                  selectedLanguage === 'ENGLISH' ? 'font-bold' : ''
                }`}
                onClick={() => handleLanguageSelect('ENGLISH')}
              >
                <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-6 h-6 mr-3" />
                <span className="text-gray-700 font-semibold">ENGLISH</span>
              </div>
              <div
                className={`flex items-center cursor-pointer ${
                  selectedLanguage === 'SPANISH' ? 'font-bold' : ''
                }`}
                onClick={() => handleLanguageSelect('SPANISH')}
              >
                <img src="https://flagcdn.com/w20/es.png" alt="Spanish" className="w-6 h-6 mr-3" />
                <span className="text-gray-700 font-semibold">SPANISH</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
