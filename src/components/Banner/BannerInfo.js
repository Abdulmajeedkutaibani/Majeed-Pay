import React from 'react';
import Btn from '../Btn';
const BannerInfo = () => {
  return (
    <div className='banner-info'>
      <h1>Who we work with</h1>
      <p>
        Today, millions of people around the world have successfully connected
        their accounts to apps they love using our API. We provide developers
        with the tools they need to create easy and accessible experiences for
        their users.
      </p>
      <Btn btnType='btn-2' btnText='About Us' />
    </div>
  );
};

export default BannerInfo;
