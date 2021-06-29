import React from 'react';

const Checkbox = () => {
  return (
    <div className='checkbox-container'>
      <input className='checkbox' type='checkbox' />
      <label htmlFor='check'>
        Stay up-to-date with company announcements and updates to our API
      </label>
    </div>
  );
};

export default Checkbox;
