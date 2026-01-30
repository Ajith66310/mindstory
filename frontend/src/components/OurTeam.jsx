import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '../assets/assest';

gsap.registerPlugin(ScrollTrigger);

const characters = [
  { id: 1, name: 'Sijo Francis - GENERAL MANAGER', img: img.company },
  { id: 2, name: 'Harikrishnan - HR MANAGER', img: img.company2},
  { id: 3, name: 'VinuKumar - HEAD OF OPERATIONS', img:  img.company3},
  { id: 4, name: 'Anirudhan - FINANCE MANAGER', img: img.company4 },
];

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const listWrapperRef = useRef(null);
  const listItemsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!listItemsRef.current[0]) return;

      const itemHeight = listItemsRef.current[0].offsetHeight + 8;
      const totalScroll = itemHeight * (characters.length - 1);

      gsap.to(listWrapperRef.current, {
        y: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalScroll}`,
          pin: true,
          pinSpacing: true, 
          scrub: 0.8,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (characters.length - 1));
            setActiveIndex(index);
          },
          onToggle: (self) => {
            gsap.to(imageRef.current, {
              opacity: self.isActive ? 1 : 0,
              duration: 0.3
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div className="bg-white text-[#0a0a0a] min-h-screen relative">
      <style>{`
        .list-item-heading { transition: opacity 0.4s ease, transform 0.4s ease; }
        .list-item-index { transition: color 0.4s ease; }
        
        .team-image-container {
          position: fixed;
          top: 50%;
          right: 5rem;
          transform: translateY(-50%);
          z-index: 50;
          pointer-events: none;
          opacity: 0;
        }

        /* Target mobile screens (sm) */
        @media (max-width: 640px) {
          .team-image-container {
            top: 40% !important;
            bottom: 2rem !important; 
            right: 1.5rem !important;
            transform: none !important;
            width: 250px !important; 
            height: 300px !important;
          }
          
          .team-image-container img {
            width: 100% !important;
            height: 100% !important;
          }
        }
      `}</style>

      <div ref={imageRef} className="team-image-container">
        <img
          src={characters[activeIndex >= 0 ? activeIndex : 0]?.img}
          alt="Team member"
          className="w-105 h-140 object-cover object-top rounded-md shadow-xl"
          style={{ filter: 'grayscale(20%)' }}
        />
      </div>

      <div 
        ref={containerRef}
        className="h-screen px-15 overflow-hidden relative max-sm:px-6" 
      >
        <div ref={listWrapperRef} className="will-change-transform">
          <div className="flex flex-col gap-2 w-full py-20">
            {characters.map((character, index) => (
              <div
                key={character.id}
                ref={el => (listItemsRef.current[index] = el)}
                className={`flex items-center py-4 border-b border-black/10 ${
                  index === characters.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <span className={`list-item-index text-sm font-mono ${
                  index === activeIndex ? 'text-black' : 'text-black/30'
                }`}>
                  {String(character.id).padStart(2, '0')}
                </span>
                <div className={`list-item-heading text-[clamp(24px,5vw,48px)] italic ${
                  index === activeIndex ? 'opacity-100 translate-x-6' : 'opacity-40'
                }`}>
                  {character.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}