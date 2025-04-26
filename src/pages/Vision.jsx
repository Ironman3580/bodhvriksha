
import React from 'react'

import BackGround from '../components/backGround'
import FooterLeft from '../components/FooterLeft'

import FooterRight from '../components/FooterRight'
// import HeaderLeft from '../components/HeaderLeft'
import HeaderRight from '../components/HeaderRight'
const Vision = () => {
  return (
    <>
      <HeaderRight />

      {/* <ParticleBackground /> */}
      {/* <TeamMemberCard /> */}
      <BackGround />
      <div className='absolute md:absolute w-full md:w-[79%] h-auto md:h-[70%] contact-us md:top-32 left-0 p-4 md:p-6 md:mr-40 md:ml-40 bg-gray-900 text-white rounded-lg '>
        <h2 className='text-xl md:text-2xl flex justify-center font-bold mb-4 md:mb-6 text-gray-200'>Our Vision</h2>

        <p className='text-lg md:text-xl  text-blue-400 text-center'>In BodhVriksha our Vision is to Empower the Weaker section of society in technology sector through various initiatives like School Visit , Public Awareness, skill building  Workshops , online campaigning , QNA sessions and much more</p>
        <br />
        <p className='text-lg md:text-xl  text-blue-400 text-center'>Just like our tagline says <em>“Planting Seeds Of Digital Literacy”</em> our tree of technology of going to plant the seeds of knowledge in society and it will give fruits of Aware and empowered peoples </p>
        <br />
        <p className='text-lg md:text-xl  text-blue-400 text-center'>
          In one line our vision is to <b>connect the every leave of society through the stem of Technology</b> where leaves of tree refers to the peoples</p>


      </div>


      <FooterLeft />
      <FooterRight />


    </>

  )
}

export default Vision