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

        <p className='text-lg md:text-xl text-blue-400'>
          We are bodhVriksha a student run non-profit organization for the society which focuses on Digital Literacy in society By doing workshops , Awareness Sessions , QNA sessions in public , school Visits and many more  </p>
        <br />
        <p className='text-lg md:text-xl text-blue-400'>
          We founded this organization in April 2025 Because of our assignment given in the college course named <em>“Business Communication And Value Science”</em>  at Kolhapur Institute of Technology’s college of Engineering, Kolhapur.
        </p>
        <p className='text-lg md:text-xl  text-blue-400'>
          Basically the assignment was to form a dummy Organization and present it in front of college faculties But we did not treated it as a assignment but taken it as a challenge and formed this Organization with the Help of 5 Team members
        </p>
        <p className='text-lg md:text-xl  text-blue-400'>
          <ol>
            <li>1.Jaydeep Navghade</li>
            <li>2.Prathmesh Anantwar</li>
            <li>3.Saistavananjali Kute</li>
            <li>4.Samarth Dhawale</li>
            <li>5.manorama Kate</li>
          </ol>
          With this 5 teammates Bodhvriksha came to an existence</p>
        <br />
        <p className='text-lg md:text-xl  text-blue-400'>
          The name itself suggests the central idea for this organization where <b className='font-italic'>Bodh :-</b>  means the Knowledge And Awareness,<br /><b>Vriksha :-</b>vriksha resembles to the Tree
          Together it means that we are the <b>Tree of Knowledge </b>just like our logo meant to us
          It resembles to the tree and a circuit diagram which conveys the message of <b>Tree made up of Technology</b>
        </p>
        


      </div>


      <FooterLeft />
      <FooterRight />


    </>
  )
}

export default About