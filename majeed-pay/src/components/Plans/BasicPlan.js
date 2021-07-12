import React from 'react';
import Btn from '../Btn';
import Tick from './Tick.svg';
const BasicPlan = () => {
  return (
    <div className='plan'>
      <div className='plan-header'>
        <span className='plan-title'>Basic Plan</span>
        <p className='plan-description'>
          Launch your project with unlimited requests and no contractual
          minimums
        </p>
        <h1 className='plan-price'>$249.00</h1>
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
            <span className='disabled-feature'>Liabilities</span>
          </li>
          <li>
            <span className='disabled-feature'>Income</span>
          </li>
        </ul>
      </div>
      <Btn btnType='btn-3' btnText='Request Access' />
    </div>
  );
};

export default BasicPlan;
