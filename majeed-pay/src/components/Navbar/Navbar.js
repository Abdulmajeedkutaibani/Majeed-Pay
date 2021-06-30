import React from 'react';

import Btn from '../Btn';
import Logo from './Logo';
const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />

      <div className='navList'>
        <ul className='navbar-links'>
          <li className='list-item'>
            <a href=''>Pricing</a>
          </li>
          <li className='list-item'>
            <a href=''>About</a>
          </li>
          <li className='list-item'>
            <a href=''>Contact</a>
          </li>
        </ul>
      </div>
      <div className='navBtn'>
        <Btn btnType='btn-1' btnText='Schedule a Demo' />
      </div>
    </div>
  );
};

export default Navbar;
