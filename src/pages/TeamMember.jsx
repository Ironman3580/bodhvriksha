import React from 'react';
import BackGround from '../components/backGround';
import FooterRight from '../components/FooterRight';
import FooterLeft from '../components/FooterLeft'
import HeaderRight from '../components/HeaderRight';
import BackGroundText from '../components/BackGroundText';
 // Make sure this import exists
// import ParticleBackground from '../components/ParticalBackground'

const Signin = () => {
  return (
    <div>
      <HeaderRight />
      <BackGroundText />

      <BackGround />
      <FooterLeft />
      <FooterRight />
    </div>

  );
};

export default Signin;

