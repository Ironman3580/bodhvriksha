import React from 'react';
import { UpcomingEventsdata } from '../data/UpcomingEventData';

const UpcomingEvents = () => {
  return (
    <div className='relative md:absolute w-full md:w-[79%] h-auto md:h-[70%] upcoming-events md:top-32 left-0 p-4 md:p-6 md:mr-40 md:ml-40 bg-gradient-to-b from-violet-950 to-grey-950text-white rounded-lg'>
      <h2 className='text-xl md:text-2xl flex justify-center font-bold mb-4 md:mb-6 text-gray-200'>What We Do</h2>

      <div className='events-grid grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {UpcomingEventsdata.map(event => (
          <div key={event.id} className='event-card bg-gray-800 p-3 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <h3 className='text-lg md:text-xl font-semibold mb-2 text-blue-400'>{event.title}</h3>
            <p className='text-sm md:text-base text-gray-400 mb-1'><span className='font-medium'>Date:</span> {event.date}</p>
            <p className='text-sm md:text-base text-gray-400 mb-1'><span className='font-medium'>Location:</span> {event.location}</p>
            <p className='text-sm md:text-base text-gray-300 mt-2 md:mt-3'>{event.description}</p>
            <button className='mt-3 md:mt-4 px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className='mt-6 md:mt-8 text-center'>
        <button className='px-4 py-1 md:px-6 md:py-2 text-sm md:text-base border border-blue-500 text-blue-400 rounded hover:bg-gray-800 transition-colors'>
          View All Events
        </button>
      </div>
    </div>
  );
}

export default UpcomingEvents;