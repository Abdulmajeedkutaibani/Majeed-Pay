import React from 'react';

const Btn = ({ btnType, btnText, onClick }) => {
  return (
    <button onClick={onClick} className={btnType}>
      <span>{btnText}</span>
    </button>
  );
};

export default Btn;
