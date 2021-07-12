import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import FeaturesGroup from '../Features/FeaturesGroup';
import Footer from '../Footer/Footer';
import Main from '../Main';
import Navbar from '../Navbar/Navbar';
import ReadyToStart from '../ReadyToStart';

const HomePage = () => {
  return (
    <div className='home-page'>
      <Navbar />
      <Main />
      <Banner />
      <Features />
      <FeaturesGroup />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default HomePage;
