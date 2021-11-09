import React from 'react';
import Btn from '../Btn';
import Tick from './Tick.svg';
const FreePlan = () => {
  return (
    <div className='plan'>
      <div className='plan-header'>
        <span className='plan-title'>Free Plan</span>
        <p className='plan-description'>
          Build and test using our core set of products with up to 100 API
          requests
        </p>
        <h1 className='plan-price'>$0.00</h1>
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
            <span className='disabled-feature'>Investment</span>
          </li>
          <li>
            <span className='disabled-feature'>Assets</span>
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

export default FreePlan;
