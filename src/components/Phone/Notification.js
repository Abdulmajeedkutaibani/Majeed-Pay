import React from 'react';

const Notification = () => {
  return (
    <>
      <h1 className='time'>12:49</h1>
      <div className='notification'>
        <div className='title-time'>
          <h3 className='notification-title'>MajeedPay</h3>
          <span className='notification-time'>Just Now</span>
        </div>
        <p className='info'>
          The payment has been processed. The total amount deducted from your
          account is <span>US $104.90.</span>
        </p>
      </div>
    </>
  );
};

export default Notification;
