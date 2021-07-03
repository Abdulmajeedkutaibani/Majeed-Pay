import React from 'react';
import MenuBtn from './MenuBtn.svg';
import Btn from '../Btn';
import Logo from './Logo';
import NavList from './NavList';

const Navbar = () => {
  const displayMenu = () => {
    return (document.getElementById('navList').style.display = 'block');
  };
  return (
    <nav>
      <Logo />
      <div className='menu-btn' onClick={displayMenu}>
        <img src={MenuBtn} alt='' />
      </div>
      <NavList />
    </nav>
  );
};

export default Navbar;
