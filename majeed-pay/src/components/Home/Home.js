import React from 'react';
import EmailInput from '../EmailInput';
import PhoneNotification from '../Phone/PhoneNotification';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-info'>
        <h1>Start building with our APIs for absolutely free.</h1>
        <EmailInput />
        <p>
          Have any questions? <span>Contact Us</span>
        </p>
      </div>
      <div className='home-image'>
        <PhoneNotification />
      </div>
    </div>
  );
};

export default Home;
