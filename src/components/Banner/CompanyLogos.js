import React from 'react';
import Tesla from './Tesla.svg';
import Microsoft from './Microsoft.svg';
import Hp from './Hp.svg';
import Oracle from './Oracle.svg';
import Google from './Google.svg';
import Nvidia from './Nvidia.svg';

const CompanyLogos = () => {
  return (
    <div className='company-logos'>
      <img src={Tesla} alt='' />
      <img src={Microsoft} alt='' />
      <img src={Hp} alt='' />
      <img src={Oracle} alt='' />
      <img src={Google} alt='' />
      <img src={Nvidia} alt='' />
    </div>
  );
};

export default CompanyLogos;
