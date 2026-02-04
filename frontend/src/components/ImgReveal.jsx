import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '../assets/assest';

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = () => {
  const containerRef = useRef(null);
  const mouseImgRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);

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

    const moveMouse = (e) => {
      if (mouseImgRef.current) {
        gsap.to(mouseImgRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener('mousemove', moveMouse);
    return () => {
      window.removeEventListener('mousemove', moveMouse);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Shared Tailwind classes for the text
  const textClass = "text-[clamp(2rem,8vw,7.5rem)] font-bold tracking-tighter leading-none whitespace-nowrap uppercase";

  return (
    <div className="bg-[#fafafa] text-[#1a1a1a] overflow-x-hidden selection:bg-black selection:text-white cursor-default">
      
      {/* FLOATING IMAGE FOLLOWER */}
      <div 
        ref={mouseImgRef}
        className={`fixed top-0 left-0 
          w-75 h-50          
          md:w-137.5 md:h-87.5    
          pointer-events-none z-999 overflow-hidden rounded-2xl 
          transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 
          ${activeImage ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
      >
        <img 
          src={activeImage || img.company} 
          className="w-full h-full object-cover" 
          alt="preview" 
        />
      </div>

      <div 
        ref={containerRef} 
        className="w-full min-h-screen flex flex-col justify-center items-center py-10 md:py-32 space-y-2 md:space-y-4 px-4"
      >
        
        <div className="line flex justify-center items-center gap-2 md:gap-6">
          <span className={textClass}>We craft</span>
          <span 
            onMouseEnter={() => setActiveImage(img.company)}
            onMouseLeave={() => setActiveImage(null)}
            className="img-span h-10 md:h-24 w-0 rounded-md md:rounded-xl overflow-hidden relative bg-gray-200 cursor-none"
          >
            <img src={img.company} alt="craft" className="h-full w-full object-cover opacity-30" />
          </span>
        </div>

        <div className="line flex justify-center items-center gap-2 md:gap-6">
          <span className={textClass}>Vivid</span>
          <span 
            onMouseEnter={() => setActiveImage(img.company2)}
            onMouseLeave={() => setActiveImage(null)}
            className="img-span h-10 md:h-24 w-0 rounded-md md:rounded-xl overflow-hidden relative bg-gray-200 cursor-none"
          >
            <img src={img.company2} alt="vivid" className="h-full w-full object-cover opacity-30" />
          </span>
          <span className={textClass}>spectacles</span>
        </div>

        <div className="line flex justify-center items-center gap-2 md:gap-6">
          <span 
            onMouseEnter={() => setActiveImage(img.company3)}
            onMouseLeave={() => setActiveImage(null)}
            className="img-span h-10 md:h-24 w-0 rounded-md md:rounded-xl overflow-hidden relative bg-gray-200 cursor-none"
          >
            <img src={img.company3} alt="connect" className="h-full w-full object-cover opacity-30" />
          </span>
          <span className={textClass}>to connect</span>
        </div>

        <div className="line flex justify-center items-center">
          <span className={textClass}>human emotion</span>
        </div>

        <div className="line flex justify-center items-center gap-2 md:gap-6">
          <span className={textClass}>beyond</span>
          <span 
            onMouseEnter={() => setActiveImage(img.company4)}
            onMouseLeave={() => setActiveImage(null)}
            className="img-span h-10 md:h-24 w-0 rounded-md md:rounded-xl overflow-hidden relative bg-gray-200 cursor-none"
          >
            <img src={img.company4} alt="pixels" className="h-full w-full object-cover opacity-30" />
          </span>
          <span className={textClass}>pixels.</span>
        </div>

      </div>
    </div>
  );
};

export default ImageReveal;