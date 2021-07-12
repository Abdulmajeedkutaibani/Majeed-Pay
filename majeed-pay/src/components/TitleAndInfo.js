import React from 'react';

const TitleAndInfo = ({ title, info }) => {
  return (
    <div className='title-info'>
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
};

export default TitleAndInfo;
