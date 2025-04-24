import React from 'react';

const BackGroundCircle = () => {


  // const styles = {
  //   position: 'fixed',
  //   top: '37%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   background: 'hsl(158, 98%, 43%)',
  //   borderRadius: '50%',
  //   border: '2px solid hsl(158, 89%, 30%)',
  //   width: '150px',
  //   height: '160px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   justifySelf: 'center',
  //   fontSize: 'var(--small-font-size)',
  //   color: 'var(--white-color)',
  //   fontWeight: 'var(--font-medium)',
  // };

  // const afterStyles = {
  //   content: '""',
  //   border: '2px solid hsl(60, 100%, 50%)',
  //   width: '250px',
  //   height: '260px',
  //   position: 'absolute',
  //   borderRadius: '50%',
    

  // }

  // const beforeStyles = {
  //   content: '""',
  //   border: '2px solid hsl(158, 98%, 43%)',
  //   width: '150px',
  //   height: '160px',
  //   position: 'absolute',
  //   borderRadius: '50%',
  //   boxShadow: '0 0 20px 10px hsl(158, 98%, 43%)', // Increased spread and blur
  //   transition: '.5s',
  //   animation: 'pulse 4s infinite',
  // };

  // // Add the animation keyframes to the document
  // if (typeof document !== 'undefined') {
  //   const styleElement = document.createElement('style');
  //   styleElement.innerHTML = `
  //     @keyframes pulse {
  //       0% {
  //         box-shadow: 0 0 10px 5px hsl(158, 98%, 43%);
  //         opacity: 0.6;
  //         border-radius: 50%;
  //       }
  //       50% {
  //         box-shadow: 0 0 25px 15px hsl(158, 98%, 43%);
  //         opacity: 1;
  //         border-radius: 50%;
  //       }
  //       100% {
  //         box-shadow: 0 0 10px 5px hsl(158, 98%, 43%);
  //         opacity: 0.6;
  //         border-radius: 50%;
  //       }
  //     }
  //   `;
  //   document.head.appendChild(styleElement);
  // }

  return (
    
  <div className="fixed inset-0 bg-gray-950 -z-10">
  <div
    className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 blur-[250px] transition-transform duration-1000 ease-out mix-blend-screen"
    style={{
      transform: `translate(
        calc(20%px - 20%),
        calc(50%px - 20%)
      )`,
      left: 0,
      top: 0,
    }}
  >
    
  </div>


</div>

  );
};

export default BackGroundCircle;