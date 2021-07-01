import React from 'react';
import MenuBtn from './MenuBtn.svg';
import Btn from '../Btn';
import Logo from './Logo';
import Xbtn from './Xbtn.svg';
const Navbar = () => {
  return (
    <nav>
      <Logo />

      <div className='navList'>
        <ul>
          <li>
            <img className='Xbtn' src={Xbtn} alt='' />
          </li>
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
      <div className='navBtn'>
        <Btn btnType='btn-1' btnText='Schedule a Demo' />
      </div>
      <div className='menu-btn'>
        <img src={MenuBtn} alt='' />
      </div>
    </nav>
  );
};

export default Navbar;
