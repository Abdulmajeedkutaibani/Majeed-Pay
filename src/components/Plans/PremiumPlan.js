import React from 'react';
import Btn from '../Btn';
import Tick from './Tick.svg';

const PremiumPlan = () => {
  return (
    <div className='plan'>
      <div className='plan-header'>
        <span className='plan-title'>Premium Plan</span>
        <p className='plan-description'>
          Get tailored solutions, volume pricing, and dedicated support for your
          team
        </p>
        <h1 className='plan-price'>$499.00</h1>
      </div>
      <div className='plan-features'>
        <ul>
          <li>
            <img src={Tick} /> <span>Transactions</span>
          </li>
          <li>
            <img src={Tick} /> <span>Auth</span>
          </li>
          <li>
            <img src={Tick} /> <span>Identity</span>
          </li>
          <li>
            <img src={Tick} /> <span>Investments</span>
          </li>
          <li>
            <img src={Tick} /> <span>Assests</span>
          </li>
          <li>
            <img src={Tick} /> <span>Liabilities</span>
          </li>
          <li>
            <img src={Tick} /> <span>Income</span>
          </li>
        </ul>
      </div>
      <Btn btnType='btn-3' btnText='Request Access' />
    </div>
  );
};

export default PremiumPlan;
