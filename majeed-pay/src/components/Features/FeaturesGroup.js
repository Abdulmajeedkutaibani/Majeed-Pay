import React from 'react';
import MoneyIcon from './MoneyIcon.svg';
import StockIcon from './StockIcon.svg';
import CreditCardIcon from './CreditCardIcon.svg';
import './FeaturesGroup.css';
const FeaturesGroup = () => {
  return (
    <div className='features-group'>
      <div className='group-item'>
        <div className='item-icon'>
          <img src={MoneyIcon} alt='' />
        </div>
        <span className='item-title'>Personal Finances</span>
        <p className='item-description'>
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </p>
      </div>
      <div className='group-item'>
        <div className='item-icon'>
          <img src={StockIcon} alt='' />
        </div>
        <span className='item-title'>Banking & Coverage</span>
        <p className='item-description'>
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </p>
      </div>
      <div className='group-item'>
        <div className='item-icon'>
          <img src={CreditCardIcon} alt='' />
        </div>
        <span className='item-title'>Consumer Payments</span>
        <p className='item-description'>
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </p>
      </div>
    </div>
  );
};

export default FeaturesGroup;
