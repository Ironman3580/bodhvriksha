import { useState, useEffect } from "react";
import "./App.css"; // Optional: For additional styling

const backgrounds = [
  "url('https://source.unsplash.com/1600x900/?nature')",
  "url('https://source.unsplash.com/1600x900/?city')",
  "url('https://source.unsplash.com/1600x900/?space')",
  "url('https://source.unsplash.com/1600x900/?ocean')",
];

function App() {
  const [bg, setBg] = useState(backgrounds[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBg(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <h1 style={{ color: "white", textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>
        Dynamic Background in React + Vite
      </h1>
    </div>
  );
}

export default App;