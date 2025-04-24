import React, { useState, useEffect } from 'react';
import { 
  FaFacebookF, 
  FaXTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn,
  FaPlus,
  FaXmark // Changed from FaTimes to FaXmark
} from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

const FooterRight = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/bodhvriksha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" },
  ];

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, y: -3 }
  };

  if (isMobile) {
    return (
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="flex flex-col gap-3 mb-3 items-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black bg-opacity-90 p-3 rounded-full hover:bg-gray-800 shadow-lg"
                  aria-label={link.label}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 2 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="text-white bg-black bg-opacity-90 p-4 rounded-full shadow-lg flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          {menuOpen ? <FaXmark size={20} /> : <FaPlus size={20} />} {/* Changed FaTimes to FaXmark */}
        </motion.button>
      </div>
    );
  }

  return (
    <>
    <footer 
      className="hidden md:block fixed bottom-0 right-0 w-[10%] py-3 bg-black opacity-90 border-gray-700 z-50"
      style={{
        clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 50%, 10% 0)'
      }}
    >
      <div className="flex justify-center items-center h-full">
      
          <div className="flex gap-5">
          {/* <NavLink 
              to="/Contact" 
              className="text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 text-sm"
              aria-label="Contact"
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/About" 
              className="text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 text-sm"
              aria-label="About Us"
            >
              About Us
            </NavLink>
           */}
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 p-2 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg"
              aria-label={link.label}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        </div>
     
      </footer>
      </>
  );
};

export default FooterRight;