import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from './HeroElements';

const Hero = ({check, setCheck}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} check={check} setCheck={setCheck}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Best Car Rental Service in the World</HeroH1>
          <HeroP>Sign and Drive in 5 minutes</HeroP>
          <HeroBtn smooth to='#SUV'>Rent a Car Today</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
