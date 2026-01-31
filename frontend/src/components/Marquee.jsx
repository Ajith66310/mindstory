import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "../assets/assest";

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const scrollContainerRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const contentWidth = track.scrollWidth / 2;
    
    tweenRef.current = gsap.to(track, {
      x: -contentWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    let scrollVelocity = 0;
    
    ScrollTrigger.create({
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        const skew = velocity / 200; 
        const timeScale = 1 + Math.abs(velocity / 1000);
        
        gsap.to(track, {
          skewX: skew,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(tweenRef.current, {
          timeScale: timeScale,
          duration: 0.5,
        });
      }
    });

    const stopScroll = () => {
      gsap.to(track, { skewX: 0, duration: 0.5, ease: "power3.out" });
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });
    };

    window.addEventListener("scrollend", stopScroll);

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      window.removeEventListener("scrollend", stopScroll);
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef} 
      className="relative w-full py-10 md:py-20 overflow-hidden bg-[#fafafa] select-none pointer-events-none"
    >
      <div 
        ref={trackRef} 
        className="flex whitespace-nowrap will-change-transform"
      >
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center gap-10 pr-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <React.Fragment key={i}>
                <h2 className="text-[12vw] font-black uppercase tracking-tighter text-black flex items-center gap-10">
                  Mindstory
                  <img
                    src={img.arrow}
                    alt="arrow"
                    className="w-[8vw] h-[8vw]"
                    style={{ filter: 'brightness(0)' }}
                  />
                </h2>
                
                <h2 
                  className="text-[12vw] font-black uppercase tracking-tighter italic flex items-center gap-10"
                  style={{ 
                    WebkitTextStroke: '1px #ea580c', 
                    color: 'transparent' 
                  }}
                >
                  Digital Agency
                  <img
                    src={img.arrow}
                    alt="arrow"
                    className="w-[8vw] h-[8vw] rotate-45"
                    style={{ filter: 'invert(48%) sepia(80%) saturate(2476%) hue-rotate(3deg) brightness(101%) contrast(106%)' }}
                  />
                </h2>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay" />
    </div>
  );
};

export default Marquee;