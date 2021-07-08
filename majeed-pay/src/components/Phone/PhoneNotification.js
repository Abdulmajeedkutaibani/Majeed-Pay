import React from 'react';
import Notification from './Notification';
const PhoneNotification = () => {
  return (
    <div className='phone'>
      <div className='frame'>
        <div className='reflect-frame-top'></div>
        <div className='reflect-frame-left'></div>
        <div className='reflect-frame-right'></div>
        <div className='screen'>
          <Notification />
        </div>
      </div>
      <div className='controles'>
        <div className='volumeBtns'></div>
        <div className='powerBtn'></div>
      </div>
    </div>
  );
};

export default PhoneNotification;
