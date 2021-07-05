import React from 'react';
import facebookIcon from './facebook.svg';
import twitterIcon from './twitter.svg';
import linkedinIcon from './linkedin.svg';

const SocialBtns = () => {
  return (
    <div className='social-btns'>
      <img src={facebookIcon} alt='' />
      <img src={twitterIcon} alt='' />
      <img src={linkedinIcon} alt='' />
    </div>
  );
};

export default SocialBtns;
