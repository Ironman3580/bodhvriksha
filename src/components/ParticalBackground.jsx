import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: { 
        value: 120,
        density: { 
          enable: true, 
          value_area: 600  
        } 
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { 
        value: 0.8,
        random: false 
      },
      size: { 
        value: 3.5,
        random: {
          enable: true,
          minimumValue: 2
        }
      },
      links: { 
        enable: true, 
        distance: 100, 
        color: "#ffffff", 
        opacity: 0.4,
        width: 1.2
      },
      move: { 
        enable: true, 
        speed: 1, 
        direction: "none", 
        out_mode: "bounce",
        bounce: true
      }
    },
    interactivity: {
      events: {
        onClick: { 
          enable: true, 
          mode: "push",
        }
      },
      modes: {
        push: {
          quantity: 3
        }
      }
    },
    retina_detect: true
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20vw',
        height: '100vh',
        zIndex: 40
      }}>
        <Particles
          id="particles-left"
          init={particlesInit}
          options={particlesConfig}
        />
      </div>
      
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '20vw',
        height: '100vh',
        zIndex: 40
      }}>
        <Particles
          id="particles-right"
          init={particlesInit}
          options={particlesConfig}
        />
      </div>
    </div>
  );
};

export default ParticleBackground;