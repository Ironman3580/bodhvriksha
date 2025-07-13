

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Assuming you have an assets import - you'll need to import this properly
// import { dropdown_icon } from '@/path-to-your-assets';

const FooterLeft = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <footer 
        className="hidden md:block fixed bottom-0 left-0 w-[100%] py-3 bg-black opacity-90 border-gray-700 z-50"
        style={{
        clipPath: 'polygon(100% 50%, 100% 100%, 0 100%, 0 0, 90% 0)'     
      }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex gap-4">
            <NavLink 
              to="/Contact" 
              className="text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-all duration-300 text-sm"
              aria-label="Contact"
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/About" 
              className="text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-all duration-300 text-sm"
              aria-label="About Us"
            >
              About Us
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterLeft;