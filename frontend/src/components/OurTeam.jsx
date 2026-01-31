import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '../assets/assest';
import ElastiicLine from './ElasticLine';

gsap.registerPlugin(ScrollTrigger);

const characters = [
  { id: 1, name: 'Sijo Francis - GENERAL MANAGER', img: img.tm1 },
  { id: 2, name: 'Harikrishnan - HR MANAGER', img: img.tm2 },
  { id: 3, name: 'VinuKumar - HEAD OF OPERATIONS', img: img.tm3 },
  { id: 4, name: 'Anirudhan - FINANCE MANAGER', img: img.tm4 },
];

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const listWrapperRef = useRef(null);
  const listItemsRef = useRef([]);
  const imageRef = useRef(null);

  const headingLine1 = useRef(null);
  const headingLine2 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      tl.fromTo(
        headingLine1.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.4, ease },
        0.1
      ).fromTo(
        headingLine2.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120, x: -30 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, x: 0, duration: 1.5, ease },
        0.25
      );

      if (!listItemsRef.current[0]) return;
      const itemHeight = listItemsRef.current[0].offsetHeight + 8;
      const totalScroll = itemHeight * (characters.length - 1);

      gsap.to(listWrapperRef.current, {
        y: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalScroll * 2}`,
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
              duration: 0.3,
            });
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#fafafa] text-[#0a0a0a] relative overflow-hidden">
      <style>{`
        .list-item-heading { transition: opacity 0.4s ease, transform 0.4s ease; }
        .list-item-index { transition: color 0.4s ease; }

        .team-image-container {
          position: fixed;
          top: 65%;
          right: 2rem;
          transform: translateY(-50%);
          z-index: 50;
          pointer-events: none;
          opacity: 0;
        }

       @media (max-width: 640px) {
          .team-image-container {
            top: 60% !important;
            bottom: 2rem !important; 
            bottom: 2rem !important;
            right: -10px !important;
            transform: none !important;
            width: 250px !important; 
            width: 250px !important;
            height: 300px !important;
          }

          .team-image-container img {
            width: 100% !important;
            height: 100% !important;
        }

      `}</style>

      {/*  IMAGE CONTAINER  */}
      <div ref={imageRef} className="team-image-container block">
        <img
          src={characters[activeIndex >= 0 ? activeIndex : 0]?.img}
          alt="Team member"
          className="w-105 h-140 object-cover object-top  rounded "
          style={{ filter: 'grayscale(20%)' }}
        />
      </div>

      <div ref={containerRef} className="min-h-70 px-6 md:px-16 lg:px-24 py-24">

        {/*  MASSIVE HEADING */}
        <div className="mb-24 leading-[0.8] select-none pointer-events-none">
          <div className="overflow-hidden">
            <div ref={headingLine1} style={{ willChange: 'transform' }}>
              <span className="block text-[15vw] lg:text-[11vw] font-black tracking-[-0.05em] text-black uppercase">
                The People
              </span>
            </div>
          </div>
          <div className="overflow-hidden" style={{ paddingLeft: '5vw' }}>
            <div ref={headingLine2} style={{ willChange: 'transform' }}>
              <span className="block text-[15vw] lg:text-[11vw] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-600 to-orange-400 bg-size-[200%_auto] animate-gradient uppercase italic">
                Behind Us
              </span>
            </div>
          </div>
        </div>

        {/* SCROLLING LIST */}
        <div className="relative h-100 overflow-hidden mt-20">
          <div ref={listWrapperRef} className="will-change-transform">
            <div className="flex flex-col gap-4 w-full">
              {characters.map((character, index) => (
                <div
                  key={character.id}
                  ref={(el) => (listItemsRef.current[index] = el)}
                  className="flex items-center py-6"
                >
                  <span
                    className={`list-item-index text-sm font-mono font-bold ${index === activeIndex ? 'text-orange-600' : 'text-black/20'
                      }`}
                  >
                    {String(character.id).padStart(2, '0')}
                  </span>

                  <div
                    className={`list-item-heading text-[clamp(28px,6vw,80px)] font-black tracking-tighter uppercase leading-none transition-all duration-500 ${index === activeIndex
                      ? 'opacity-100 translate-x-8 italic'
                      : 'opacity-10'
                      }`}
                  >
                    {character.name.split(' - ')[0]}
                    <span className="block text-sm font-bold tracking-widest mt-2 not-italic text-gray-400">
                      {character.name.split(' - ')[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
            <div className="w-full -mt-4">
        <ElastiicLine/>
          </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradient 4s ease infinite; }
      `}</style>
    </div>
  );
}