import React from 'react';
import './Banner.css';
import BannerInfo from './BannerInfo';
import BannerLogos from './BannerLogos';
const Banner = () => {
  return (
    <div className='banner'>
      <BannerInfo />
      <BannerLogos />
    </div>
  );
};

export default Banner;
