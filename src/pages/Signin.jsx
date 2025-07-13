import React from 'react'
import BackGround from '../components/backGround'
import FooterLeft from '../components/FooterLeft'
import LogoBox from '../components/LogoBox'
import FooterRight from '../components/FooterRight'
import HeaderLeft from '../components/HeaderLeft'
import HeaderRight from '../components/HeaderRight'
// import ParticleBackground from '../components/ParticalBackground'
const signin = () => {
  return (
    <div>
      <HeaderLeft />
        <HeaderRight />
      <BackGround />
      <div className='absolute md:absolute w-full md:w-[79%] h-auto md:h-[70%] contact-us md:top-32 left-0 p-4 md:p-6 md:mr-40 md:ml-40 bg-gradient-to-b from-violet-950 to-grey-950 text-white rounded-lg '>
        <h2 className='text-xl md:text-2xl flex justify-center font-bold mb-4 md:mb-6 text-gray-200'>Register</h2>

        <p className='text-lg md:text-xl font-semibold text-blue-400 text-center'>To Sign in as a volunteer</p>
        <p className='text-lg md:text-xl font-semibold text-blue-400 text-center'>click the register button below</p>
        <center>
          <a href="https://forms.gle/kQepCdVWfjqfJ4g9A" target='blank'>
        <button className='mt-3 md:mt-4 px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors justify-center items-center'>
              Register
          </button>
            </a>
          </center>

      </div>

        <FooterLeft />
        <FooterRight />
    </div>
  )
}

export default signin