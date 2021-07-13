import React from 'react';
import TeslaDark from './Contact/TeslaDark.svg';
import MicrosoftDark from './Contact/MicrosoftDark.svg';
import HpDark from './Contact/HpDark.svg';
import OracleDark from './Contact/OracleDark.svg';
import GoogleDark from './Contact/GoogleDark.svg';
import NvidiaDark from './Contact/NvidiaDark.svg';
const CompanyLogosDark = () => {
  return (
    <div className='company-logos-white'>
      <img src={TeslaDark} alt='' />
      <img src={MicrosoftDark} alt='' />
      <img src={HpDark} alt='' />
      <img src={OracleDark} alt='' />
      <img src={GoogleDark} alt='' />
      <img src={NvidiaDark} alt='' />
    </div>
  );
};

export default CompanyLogosDark;
