import React from 'react';

const OurQuality = ({ quality, description }) => {
  return (
    <div className='our-quality'>
      <h1>{quality}</h1>
      <p>{description}</p>
    </div>
  );
};

export default OurQuality;
