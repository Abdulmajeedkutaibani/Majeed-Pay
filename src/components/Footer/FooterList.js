import React from 'react';
import { Link } from 'react-router-dom';
const FooterList = () => {
  return (
    <div className='footer-list'>
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
    </div>
  );
};

export default FooterList;
