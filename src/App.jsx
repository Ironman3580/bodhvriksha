import { Routes, Route} from "react-router-dom";
import "./App.css";
import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import TeamMember from "./pages/TeamMember";
import Vision from "./pages/Vision";
import Learn from "./pages/Learn";
import Signin from "./pages/Signin";  
function App() {
  return (
    
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl:px-[11vw] h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/team" element={<TeamMember />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      </div>
  
  );
}

export default App;
