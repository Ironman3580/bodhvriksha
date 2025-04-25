import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/image/assets';

const LogoBox = () => {
  return (
    <div className='absolute top-[7%] left-1/2 transform -translate-x-1/2 w-full max-w-[350px] h-[80px] md:h-[120px] z-20 py-2 md:py-4 justify-center flex items-center backdrop-blur-sm'>
      <Link to="/" className='flex items-center'>
        <img 
          src={assets.logo} 
          alt="BodhVriksha logo" 
          className='h-[60px] w-[60px] flex items-start md:h-[80px] md:w-[80px] cursor-pointer' 
        />
        <div className='flex flex-col ml-2 md:ml-3'>
          <h1 className='text-white text-xl md:text-2xl font-medium'>BodhVriksha</h1>
          <p className='text-white text-xs md:text-sm hidden sm:block'>
            Planting Seeds Of Digital Literacy!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LogoBox;