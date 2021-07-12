import React from 'react';
import './Main.css';
import EmailInput from '../EmailInput';
import PhoneNotification from '../Phone/PhoneNotification';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-info'>
        <h1>Start building with our APIs for absolutely free.</h1>
        <EmailInput />
        <p>
          Have any questions? <span>Contact Us</span>
        </p>
      </div>
      <div className='main-image'>
        <PhoneNotification />
      </div>
    </div>
  );
};

export default Main;
