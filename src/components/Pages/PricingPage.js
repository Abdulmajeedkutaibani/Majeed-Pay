import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import PageHeaderTitle from '../PageHeaderTitle';
import Plans from '../Plans/Plans';
import ReadyToStart from '../ReadyToStart';

const PricingPage = () => {
  return (
    <div className='pricing-page'>
      <div className='circle-1'></div>
      <PageHeaderTitle text='Pricing' />
      <Plans />
      <ReadyToStart />
    </div>
  );
};

export default PricingPage;
