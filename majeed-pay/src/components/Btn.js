import React from 'react';

const Btn = ({ btnType, btnText }) => {
  return (
    <div className={btnType}>
      <span>{btnText}</span>
    </div>
  );
};

export default Btn;
