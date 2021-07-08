import React from 'react';
import CheckMark from './CheckMark.svg';
import Btn from '../Btn';
const AppScreen2 = () => {
  return (
    <div className='payment-done'>
      <div className='done-circle'>
        <img src={CheckMark} alt='' />
      </div>
      <p>
        Payment of <span>$9204</span> is completed and processed successfully
      </p>
      <Btn btnType='btn-1' btnText='Dismiss' />
    </div>
  );
};

export default AppScreen2;
