import React from 'react';
import HomeSwiper from '../components/HomeSwiper';
import Product from '../components/Product';
import FeaturedProducts from '../components/FeaturedProducts';
import Lamp from '../components/Lamp';
import NewArrivals from '../components/NewArrivals';

const Home = () => {
  return (
    <>
    <HomeSwiper/>
    <Product/>
    <FeaturedProducts/>
    <Lamp/>
    <NewArrivals/>
    </>
  );
}

export default Home;
