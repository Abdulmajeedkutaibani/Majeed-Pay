import React from 'react';
import TitleAndInfo from '../TitleAndInfo';
import Feature1Image from './Feature1.svg';
const Feature1 = () => {
  return (
    <div className='feature'>
      <img src={Feature1Image} alt='' />
      <TitleAndInfo
        title='Easy to implement'
        info='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'
      />
    </div>
  );
};

export default Feature1;
