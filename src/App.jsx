import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import TeamMember from "./pages/TeamMember";
import TeamMemberCard from "./components/TeamMemberCard";
function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl:px-[11vw] h-screen overflow-hidden">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/team" element={<TeamMember />} />

        

      </Routes>
    </div>
  );
}

export default App;
