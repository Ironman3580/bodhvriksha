import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-tech-blue-900 bg-opacity-80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-tech-cyan-400">
            <div className="w-7 h-7 bg-tech-blue-800 rounded-full flex items-center justify-center">
              <span className="text-tech-cyan-400 text-lg font-bold">A</span>
            </div>
          </div>
        </Link>
        
        <div className="flex space-x-10">
          {[
            { name: "ABOUT US", path: "/" },
            { name: "OUR TEAM", path: "/team" },
            { name: "EVENTS", path: "/events" },
            { name: "CONTACT", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-tech-cyan-400 transition-colors duration-300 tracking-widest font-light"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;