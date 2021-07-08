import React from 'react';
import AppScreen from './AppScreen';

const PhoneApp = () => {
  return (
    <div className='phone'>
      <div className='frame'>
        <div className='reflect-frame-top'></div>
        <div className='reflect-frame-left'></div>
        <div className='reflect-frame-right'></div>
        <div className='screen'>
          <AppScreen />
        </div>
      </div>
      <div className='controles'>
        <div className='volumeBtns'></div>
        <div className='powerBtn'></div>
      </div>
    </div>
  );
};

export default PhoneApp;
