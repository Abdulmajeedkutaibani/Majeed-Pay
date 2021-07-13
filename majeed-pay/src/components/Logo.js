import React from 'react';
import Icon from './Icon.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className='navIcon'>
      <img src={Icon} alt='' />
      <span>MajeedPay</span>
    </Link>
  );
};

export default Logo;
