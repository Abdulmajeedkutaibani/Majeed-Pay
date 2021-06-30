import React from 'react';
import Icon from './Icon.svg';

const Logo = () => {
  return (
    <div className='navIcon'>
      <img src={Icon} alt='' />
      <label htmlFor='home'>MajeedPay</label>
    </div>
  );
};

export default Logo;
