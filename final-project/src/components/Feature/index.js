import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Luxury Car of the Day</h1>
      <p>Mercedes-Benz GLE</p>
      <FeatureButton smooth to='#Luxury'>Rent this</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
