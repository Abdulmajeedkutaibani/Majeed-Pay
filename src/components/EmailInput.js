import React from 'react';
import Btn from './Btn';

const EmailInput = () => {
  return (
    <div className='email-input-container'>
      <input type='email' placeholder='Enter email address' />
      <Btn btnType='btn-1' btnText='Schedule a Demo' />
    </div>
  );
};

export default EmailInput;
