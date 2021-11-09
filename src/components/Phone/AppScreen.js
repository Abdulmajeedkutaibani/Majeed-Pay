import React from 'react';
import LogoWhite from '../LogoWhite';
const AppScreen = () => {
  return (
    <div className='phone-app'>
      <LogoWhite />
      <div className='payment-list'>
        <ul>
          <li className='total-payment'>
            <span>Total payment</span>
            <p>$9204</p>
          </li>
          <li>
            <span>item #001</span>
            <p>$29</p>
          </li>
          <li>
            <span>item #002</span>
            <p>$105</p>
          </li>
          <li>
            <span>item #003</span>
            <p>$810</p>
          </li>
          <li>
            <span>item #004</span>
            <p>$1044</p>
          </li>
          <li>
            <span>item #005</span>
            <p>$40</p>
          </li>
          <li>
            <span>item #006</span>
            <p>$2566</p>
          </li>
          <li>
            <span>item #007</span>
            <p>$4199</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppScreen;
