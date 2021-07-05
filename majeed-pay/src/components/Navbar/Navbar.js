import { React, useState } from 'react';
import './Navbar.css';
import Logo from './Logo';
import MenuBtn from './MenuBtn';
import NavList from './NavList';
import NavList2 from './NavList2';
const Navbar = () => {
  const [navListClass, setNavListClass] = useState('navList2-hidden');
  const handleToggle = () => {
    navListClass === 'navList2-hidden'
      ? setNavListClass('navList2')
      : setNavListClass('navList2-hidden');
  };
  return (
    <>
      <nav>
        <Logo />
        <div onClick={handleToggle}>
          <MenuBtn />
        </div>
        <NavList />
        <NavList2 navListClass={navListClass} />
      </nav>
    </>
  );
};

export default Navbar;
