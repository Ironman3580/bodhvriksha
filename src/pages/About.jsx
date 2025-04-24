import React from 'react'

import BackGround from '../components/backGround'
import FooterLeft from '../components/FooterLeft'

import FooterRight from '../components/FooterRight'
// import HeaderLeft from '../components/HeaderLeft'
import HeaderRight from '../components/HeaderRight'
const About = () => {
  return (
    <>
      <HeaderRight />

      {/* <ParticleBackground /> */}
      {/* <TeamMemberCard /> */}
      <BackGround />
      <div className='relative md:absolute w-full md:w-auto h-auto md:h-[70%] upcoming-events md:top-32 left-0 p-4 md:p-6 md:mr-40 md:ml-40 bg-gray-900 text-white rounded-lg '>
        <h2 className='text-xl md:text-2xl flex justify-center font-bold mb-4 md:mb-6 text-gray-200'>About Us</h2>

        <p className='text-lg md:text-xl font-semibold text-blue-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci, delectus repellat quas ipsa commodi deserunt nihil sit impedit alias fugit placeat porro ab dolorem ad sequi odit provident iure! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci eligendi voluptatum quos sequi eius enim blanditiis consectetur aliquam vitae exercitationem quo voluptas rem soluta suscipit, aspernatur harum. Animi, harum?</p>
      </div>


      <FooterLeft />
      <FooterRight />


    </>
  )
}

export default About