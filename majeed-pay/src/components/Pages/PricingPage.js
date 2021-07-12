import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Plans from '../Plans/Plans';
import ReadyToStart from '../ReadyToStart';

const PricingPage = () => {
  return (
    <div className='pricing-page'>
      <Navbar />
      <h1 className='pricing-title'>Pricing</h1>
      <Plans />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default PricingPage;
