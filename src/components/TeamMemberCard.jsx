import React from 'react';

import { TeamData } from '../data/TeamData';
const TeamMemberCard = () => {

  return (
    <div className='relative md:absolute w-full md:w-[79%] h-auto md:h-[70%] md:top-32 left-0 p-4 md:p-6 md:mr-40 md:ml-40 bg-gradient-to-b from-violet-950 to-grey-950 text-white rounded-lg '>
          <h2 className='text-xl md:text-2xl flex justify-center font-bold mb-4 md:mb-6 text-gray-200'>Our Team</h2>
          
          <div className='events-grid grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 align-center'>
            {TeamData.map(team => (
              <div key={team.id} className='event-card bg-gray-900 p-3 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow justify-center'>
                <h3 className='text-lg md:text-xl font-semibold mb-2 text-blue-400'>{team.name}</h3>
                <p className='text-sm md:text-base text-gray-400 mb-1'><span className='font-medium'>Date:</span> {team.date}</p>
                <p className='text-sm md:text-base text-gray-400 mb-1'><span className='font-medium'>Domain:</span> {team.domain}</p>
                <p className='text-sm md:text-base text-gray-300 mt-2 md:mt-3'>{team.description}</p>
               
              </div>
            ))}
          </div>
        </div>
  );
};

export default TeamMemberCard;