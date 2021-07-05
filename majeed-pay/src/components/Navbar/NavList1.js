import React from 'react';
import Btn from '../Btn';
import { useState } from 'react';

const NavList = () => {
  return (
    <div className='navList1'>
      <ul>
        <li>
          <a href=''>Pricing</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
      </ul>
      <Btn btnType='btn-1' btnText='Schedule a Demo' />
    </div>
  );
};

export default NavList;
