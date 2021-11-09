import React from 'react';
import AppScreen2 from './AppScreen2';

const PhoneApp2 = () => {
  return (
    <div className='phone'>
      <div className='frame'>
        <div className='reflect-frame-top'></div>
        <div className='reflect-frame-left'></div>
        <div className='reflect-frame-right'></div>
        <div className='screen screen-2'>
          <AppScreen2 />
        </div>
      </div>
      <div className='controles'>
        <div className='volumeBtns'></div>
        <div className='powerBtn'></div>
      </div>
    </div>
  );
};

export default PhoneApp2;
