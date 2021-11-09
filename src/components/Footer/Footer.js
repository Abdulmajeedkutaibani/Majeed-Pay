import React from 'react';
import LogoWhite from '../LogoWhite';
import FooterList from './FooterList';
import SocialBtns from '../SocialBtns';
import './Footer.css';
const Footer = () => {
  return (
    <footer className=''>
      <LogoWhite />
      <FooterList />
      <SocialBtns />
    </footer>
  );
};

export default Footer;
