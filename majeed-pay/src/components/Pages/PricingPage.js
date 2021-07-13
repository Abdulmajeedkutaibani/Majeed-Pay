import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import PageHeaderTitle from '../PageHeaderTitle';
import Plans from '../Plans/Plans';
import ReadyToStart from '../ReadyToStart';

const PricingPage = () => {
  return (
    <div className='pricing-page'>
      <Navbar />
      <PageHeaderTitle text='Pricing' />
      <Plans />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default PricingPage;
