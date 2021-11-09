import React from 'react';
import { useState } from 'react';
const MenuBtn = () => {
  const [line1, setLine1] = useState('line1');
  const [line2, setLine2] = useState('line2');
  const [line3, setLine3] = useState('line3');
  const [menuBtn, setMenuBtn] = useState('menu-btn');
  const handleClick = () => {
    if (menuBtn === 'menu-btn') {
      setLine1('line1-rotate');
      setLine2('line2-hidden');
      setLine3('line3-rotate');
      setMenuBtn('menu-btn-active');
    } else {
      setLine1('line1');
      setLine2('line2');
      setLine3('line3');
      setMenuBtn('menu-btn');
    }
  };

  return (
    <button className={menuBtn} onClick={handleClick}>
      <span className={line1}></span>
      <span className={line2}></span>
      <span className={line3}></span>
    </button>
  );
};

export default MenuBtn;
