import React from 'react'
import BackGround from '../components/backGround'
import FooterLeft from '../components/FooterLeft'
import LogoBox from '../components/LogoBox'
import FooterRight from '../components/FooterRight'
// import HeaderLeft from '../components/HeaderLeft'
import HeaderRight from '../components/HeaderRight'
import BackGroundText from '../components/BackGroundText'
import BackGroundCircle from '../components/BackGroundCircle'
// import ParticleBackground from '../components/ParticalBackground'



const Home = () => {
  return (
    <div>
        {/* <HeaderLeft /> */}
        <HeaderRight />
        <LogoBox />
        <BackGroundText />
        <BackGroundCircle />
        <BackGround />
        {/* <ParticleBackground /> */}
      {/* <MainRobot /> */}
      
        <FooterLeft />
        <FooterRight />
    </div>
  )
}

export default Home;