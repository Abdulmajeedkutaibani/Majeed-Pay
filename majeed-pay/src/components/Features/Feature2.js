import React from 'react';
import Phone from '../Phone/PhoneDefault';
import TitleAndInfo from '../TitleAndInfo';
import Feature2ImageA from './Feature2A.svg';
import Feature2ImageB from './Feature2B.svg';
import Notification from '../Phone/Notification';
import PhoneApp from '../Phone/PhoneApp';
import PhoneApp2 from '../Phone/PhoneApp2';
const Feature2 = () => {
  return (
    <div className='feature feature2'>
      <TitleAndInfo
        title='Simple UI & UX'
        info='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.'
      />
      <div className='feature2-phones'>
        <PhoneApp />
        <PhoneApp2 />
      </div>
    </div>
  );
};

export default Feature2;
