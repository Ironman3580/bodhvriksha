import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import TeamMemberCard from '@/components/TeamMemberCard';
import CircuitBackground from '@/components/CircuitBackground';

const leadershipTeam = [
  { name: "JANE DOE", role: "PRESIDENT", image: "https://source.unsplash.com/photo-1581092795360-fd1ca04f0952" },
  { name: "JOHN SMITH", role: "VICE-PRESIDENT", image: "https://source.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { name: "ALEX WONG", role: "TECHNICAL HEAD", image: "https://source.unsplash.com/photo-1580489944761-15a19d654956" },
  { name: "MICHELLE LEE", role: "DESIGNING HEAD", image: "https://source.unsplash.com/photo-1517841905240-472988babdf9" },
  { name: "DAVID PARK", role: "SOCIAL MEDIA HEAD", image: "https://source.unsplash.com/photo-1506794778202-cad84cf45f1d" },
  { name: "SARAH JOHNSON", role: "CAMPUS RELATIONS HEAD", image: "https://source.unsplash.com/photo-1494790108377-be9c29b29330" },
];

const technicalTeam = [
  { name: "MICHAEL BROWN", role: "#", image: "https://source.unsplash.com/photo-1500648767791-00dcc994a43e" },
  { name: "JESSICA TAYLOR", role: "#", image: "https://source.unsplash.com/photo-1544005313-94ddf0286df2" },
  { name: "RYAN GARCIA", role: "#", image: "https://source.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
  { name: "EMMA WILSON", role: "#", image: "https://source.unsplash.com/photo-1534528741775-53994a69daeb" },
];

const Team = () => {
  const leadershipRef = useRef(null);
  const technicalRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animation timing sequence using refs
    const title = titleRef.current;
    const leadershipSection = leadershipRef.current;
    const technicalSection = technicalRef.current;

    if (title) {
      title.classList.add('animate-scale-in');
    }

    if (leadershipSection) {
      leadershipSection.classList.add('animate-slide-up');
    }

    if (technicalSection) {
      technicalSection.classList.add('animate-slide-up');
    }
  }, []);

  return (
    <div className="min-h-screen bg-tech-blue-900 relative overflow-hidden">
      <CircuitBackground />
      <Navbar />
      
      <main className="container mx-auto pt-32 pb-20 relative z-10">
        <h1 
          ref={titleRef}
          className="text-6xl font-thin text-white text-center tracking-[0.2em] mb-20 opacity-0"
        >
          MEET <span className="text-tech-cyan-400">OUR</span> TEAM
        </h1>
        
        <section ref={leadershipRef} className="mb-24 opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {leadershipTeam.map((member, index) => (
              <TeamMemberCard 
                key={member.name}
                name={member.name}
                role={member.role}
                index={index}
                imageUrl={member.image}
              />
            ))}
          </div>
        </section>
        
        <h2 className="text-5xl font-thin text-white text-center tracking-[0.2em] mb-16 opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          TECHNICAL TEAM
        </h2>
        
        <section ref={technicalRef} className="opacity-0" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {technicalTeam.map((member, index) => (
              <TeamMemberCard 
                key={member.name}
                name={member.name}
                role={member.role}
                index={index + leadershipTeam.length}
                imageUrl={member.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;