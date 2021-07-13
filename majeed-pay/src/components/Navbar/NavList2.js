import React from 'react';
import Btn from '../Btn';
import { Link } from 'react-router-dom';

const NavList2 = ({ navListClass }) => {
  return (
    <div className={navListClass}>
      <div className='bottom-line'></div>
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
        <li>
          <Btn btnType='btn-1' btnText='Schedule a Demo' />
        </li>
      </ul>
    </div>
  );
};

export default NavList2;
