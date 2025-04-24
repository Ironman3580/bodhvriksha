import { useEffect, useState } from "react";

function BackGround() {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);
  //   return () => document.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <div className="fixed inset-0 bg-gray-950 -z-10">
      <div
        // className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 blur-[250px] pointer-events-none transition-transform duration-300 ease-out mix-blend-screen"
        // style={{
        //   transform: `translate(
        //     calc(${position.x}px - 20%),
        //     calc(${position.y}px - 20%)
        //   )`,
        //   left: 0,
        //   top: 0,
        // }}


        
      ></div>
    </div>
  );
}

export default BackGround;