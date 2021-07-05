import React from 'react';
import Icon from './Icon.svg';

const Logo = () => {
  return (
    <div className='navIcon'>
      <img src={Icon} alt='' />
      <span>MajeedPay</span>
    </div>
  );
};

export default Logo;
