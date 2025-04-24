import React from 'react';
import BackGround from '../components/backGround';
import FooterRight from '../components/FooterRight';
import FooterLeft from '../components/FooterLeft'
import HeaderRight from '../components/HeaderRight';
import BackGroundText from '../components/BackGroundText';
import TeamMemberCard from '../components/TeamMemberCard'; // Make sure this import exists
// import ParticleBackground from '../components/ParticalBackground'

const TeamMember = () => {
  return (
    <div>
      <HeaderRight />
      {/* <LogoBox /> */}
      {/* <ParticleBackground /> */}
      <TeamMemberCard />
      <BackGround />
      <FooterLeft />
      <FooterRight />
    </div>

  );
};

export default TeamMember;

