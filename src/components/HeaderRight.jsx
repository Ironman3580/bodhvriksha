import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Assuming you have an assets import - you'll need to import this properly
// import { dropdown_icon } from '@/path-to-your-assets';

const HeaderRight = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <footer 
        className="hidden md:block fixed top-0 right-0 w-[100%] py-3 bg-black opacity-90 border-gray-700 z-50"
        style={{
          clipPath: 'polygon(100% 0, 100% 100%, 100% 100%, 0 100%, 0 0)'
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex gap-4">
          <NavLink 
              to="/" 
              className="text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-all duration-300 text-sm"
              aria-label="Home"
            >
              Home
            </NavLink>
            <NavLink 
              to="/team" 
              className="text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-all duration-300 text-sm"
              aria-label="Team Member"
            >
              Team Member
            </NavLink>
            <NavLink 
              to="/Events" 
              className="text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-all duration-300 text-sm"
              aria-label="Events"
            >
              What We Do
            </NavLink>

            <NavLink 
              to="/learn" 
              className="text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-all duration-300 text-sm"
              aria-label="Account"
            >
              Learn
            </NavLink>
           
           
            <NavLink 
              to="/vision" 
              className="text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-all duration-300 text-sm"
              aria-label="vision"
            >
              Vision
            </NavLink>
            <NavLink 
              to="/Signin" 
              className="text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-all duration-300 text-sm"
              aria-label="signin"
            >
              signin
            </NavLink>



          </div>
        </div>
      </footer>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-black text-white rounded-md"
        onClick={() => setVisible(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Mobile Sidebar Menu */}
      <div className={`md:hidden fixed top-0 left-0 bottom-0 overflow-hidden bg-black opacity-95 transition-all duration-300 z-50 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-white'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            {/* Replace with your actual icon or remove if not needed */}
            <span className="text-xl">←</span>
            <p>Back</p>
          </div>
          <NavLink 
            onClick={() => setVisible(false)} 
            className='py-3 pl-6 border-b border-gray-700 flex flex-start hover:bg-gray-800' 
            to='/'
          >
            Home
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            className='py-3 pl-6 border-b border-gray-700 flex flex-start hover:bg-gray-800' 
            to='/Events'
          >
            what we do
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            className='py-3 pl-6 border-b border-gray-700 flex flex-start hover:bg-gray-800' 
            to='/vision'
          >
            Vision
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            className='py-3 pl-6 border-b border-gray-700 flex flex-start hover:bg-gray-800' 
            to='/team' 
          >
            Team Member
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            className='py-3 pl-6 border-b border-gray-700 flex flex-start hover:bg-gray-800' 
            to='/learn'
          >
            learn
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            className='py-3 pl-6 border-b border-gray-700 flex flex-start hover:bg-gray-800' 
            to='/contact'
          >
            Contact Us
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            className='py-3 pl-6 border-b border-gray-700 flex flex-start hover:bg-gray-800' 
            to='/About'
          >
            About Us
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            className='py-3 pl-6 border-b border-gray-700 flex flex-start hover:bg-gray-800' 
            to='/signin'
          >
            Sign In
          </NavLink>
        </div>
      </div>
      
    </>
  );
};

export default HeaderRight;