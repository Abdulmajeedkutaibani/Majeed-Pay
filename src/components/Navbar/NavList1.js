import React from 'react';
import Btn from '../Btn';
import { Link } from 'react-router-dom';

const NavList = () => {
  return (
    <div className='navList1'>
      <ul>
        <li>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <Btn btnType='btn-1' btnText='Schedule a Demo' />
    </div>
  );
};

export default NavList;
