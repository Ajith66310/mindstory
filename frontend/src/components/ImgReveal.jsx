import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '../assets/assest';

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lines = containerRef.current.querySelectorAll('.line');
    const isMobile = window.innerWidth < 768;
    const revealWidth = isMobile ? 100 : 300; 

    lines.forEach((line) => {
      const imgSpan = line.querySelector('.img-span');
      if (imgSpan) {
        gsap.to(imgSpan, {
          width: revealWidth,
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger && containerRef.current?.contains(t.trigger)) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <div className="bg-[#fafafa] text-[#1a1a1a] overflow-x-hidden selection:bg-black selection:text-white">
      
      <div 
        ref={containerRef} 
        className="w-full min-h-auto md:min-h-screen flex flex-col justify-center items-center py-10 md:py-32 space-y-2 md:space-y-4 px-4"
      >
        
        <div className="line flex justify-center items-center gap-2 md:gap-6">
          <span className="text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase">We help</span>
          <span className="img-span h-10 md:h-24 w-0 rounded-md md:rounded-xl overflow-hidden relative bg-gray-200">
            <img 
              src={img.company} 
              alt="strategy"
              className="h-full w-40 md:w-75 absolute left-1/2 -translate-x-1/2 object-cover"
            />
          </span>
          <span className="text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase">ambitious</span>
        </div>

        <div className="line flex justify-center items-center gap-2 md:gap-6">
          <span className="text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase">brands</span>
            <span className="text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase">unlock</span>
          <span className="img-span h-10 md:h-24 w-0 rounded-md md:rounded-xl overflow-hidden relative bg-gray-200">
            <img 
              src={img.company} 
              alt="digital assets"
              className="h-full w-40 md:w-75 absolute left-1/2 -translate-x-1/2 object-cover"
            />
          </span>
        </div>

        <div className="line flex justify-center items-center gap-2 md:gap-6">
               <span className="img-span h-10 md:h-24 w-0 rounded-md md:rounded-xl overflow-hidden relative bg-gray-200">
            <img 
              src={img.company} 
              alt="performance"
              className="h-full w-40 md:w-75 absolute left-1/2 -translate-x-1/2 object-cover"
            />
          </span>
          <span className="text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase">their</span>
          <span className="text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase">full</span>
        </div>

        <div className="line flex justify-center items-center">
          <span className="text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase">digital potential</span>
        </div>

        <div className="line flex justify-center items-center gap-2 md:gap-6">
          <span className="text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase">through</span>
          <span className="img-span h-10 md:h-24 w-0 rounded-md md:rounded-xl overflow-hidden relative bg-gray-200">
            <img 
              src={img.company}
              alt="market dominance"
              className="h-full w-40 md:w-75 absolute left-1/2 -translate-x-1/2 object-cover"
            />
          </span>
          <span className="text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase">velocity.</span>
        </div>

      </div>
    </div>
  );
};

export default ImageReveal;