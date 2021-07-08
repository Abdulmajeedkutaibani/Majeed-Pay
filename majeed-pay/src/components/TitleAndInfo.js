import React from 'react';

const TitleAndInfo = ({ title, info }) => {
  return (
    <div className='title-info'>
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default TitleAndInfo;
