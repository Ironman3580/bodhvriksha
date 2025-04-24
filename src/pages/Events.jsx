import React from 'react'
import BackGround from '../components/backGround'
import FooterLeft from '../components/FooterLeft'
// import LogoBox from '../components/LogoBox'
import FooterRight from '../components/FooterRight'
import HeaderLeft from '../components/HeaderLeft'
import HeaderRight from '../components/HeaderRight'
import UpcomingEvents from '../components/UpcomingEvents'
// import ParticleBackground from '../components/ParticalBackground'
const Events = () => {
  return (
    <div>
      <HeaderLeft />
        <HeaderRight />
        {/* <LogoBox /> */}
        {/* <ParticleBackground /> */}
        <UpcomingEvents />
        <BackGround />
        <FooterLeft />
        <FooterRight />
    </div>
  )
}

export default Events