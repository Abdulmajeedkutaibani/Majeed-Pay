import React from 'react';
import IconWhite from './IconWhite.svg';
import { Link } from 'react-router-dom';
const LogoWhite = () => {
  return (
    <Link to='/' className='navIcon navIcon-white'>
      <img src={IconWhite} alt='' />
      <span>MajeedPay</span>
    </Link>
  );
};

export default LogoWhite;
