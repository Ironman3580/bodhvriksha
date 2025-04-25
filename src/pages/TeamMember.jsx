import React from 'react';
import BackGround from '../components/backGround';
import FooterRight from '../components/FooterRight';
import FooterLeft from '../components/FooterLeft'
import HeaderRight from '../components/HeaderRight';
import TeamMemberCard from '../components/TeamMemberCard'; 


const TeamMember = () => {
  return (
    <div>
      <HeaderRight />
      <TeamMemberCard />
      <BackGround />
      <FooterLeft />
      <FooterRight />
    </div>

  );
};

export default TeamMember;

