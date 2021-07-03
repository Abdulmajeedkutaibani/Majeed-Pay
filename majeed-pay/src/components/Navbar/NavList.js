import React from 'react';
import Btn from '../Btn';
import { useState } from 'react';

const NavList = () => {
  const closeMenu = () => {
    document.getElementById('navList').style.display = 'none';
  };
  return (
    <div id='navList' className='navList'>
      <ul>
        <div className='close-icon' onClick={closeMenu}>
          <div className='line-1'></div>
          <div className='line-2'></div>
        </div>
        <div className='bottom-line'></div>
        <li>
          <a href=''>Pricing</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
        <li>
          <Btn btnType='btn-1' btnText='Schedule a Demo' />
        </li>
      </ul>
    </div>
  );
};

export default NavList;
