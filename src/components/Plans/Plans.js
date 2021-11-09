import React from 'react';
import BasicPlan from './BasicPlan';
import FreePlan from './FreePlan';
import PremiumPlan from './PremiumPlan';
import './Plans.css';
const Plans = () => {
  return (
    <div className='plans'>
      <FreePlan />
      <BasicPlan />
      <PremiumPlan />
    </div>
  );
};

export default Plans;
