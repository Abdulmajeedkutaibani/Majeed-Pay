import React from 'react';
import Btn from '../Btn';

const NavList2 = ({ navListClass }) => {
  return (
    <div className={navListClass}>
      <div className='bottom-line'></div>
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
        <li>
          <Btn btnType='btn-1' btnText='Schedule a Demo' />
        </li>
      </ul>
    </div>
  );
};

export default NavList2;
