
import React from 'react'

import BackGround from '../components/backGround'
import FooterLeft from '../components/FooterLeft'

import FooterRight from '../components/FooterRight'
// import HeaderLeft from '../components/HeaderLeft'
import HeaderRight from '../components/HeaderRight'
const ContactUs = () => {
  return (
    <>
      <HeaderRight />

      {/* <ParticleBackground /> */}
      {/* <TeamMemberCard /> */}
      <BackGround />
      <div className='absolute md:absolute w-full md:w-[79%] h-auto md:h-[70%] contact-us md:top-32 left-0 p-4 md:p-6 md:mr-40 md:ml-40 bg-gray-900 text-white rounded-lg '>
        <h2 className='text-xl md:text-2xl flex justify-center font-bold mb-4 md:mb-6 text-gray-200'>Contact Us</h2>

        <p className='text-lg md:text-xl font-semibold text-blue-400 text-center'>This Page is Under Development</p>
      </div>


      <FooterLeft />
      <FooterRight />


    </>
    
  )
}

export default ContactUs