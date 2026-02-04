import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { video } from '../assets/assest';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textGroupRef = useRef(null);
  
  // State to hold the current time
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Helper function to format time based on timezone
  const formatTime = (timeZone) => {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timeZone,
      hour12: false,
    }).format(time);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", 
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(videoWrapperRef.current, {
      scale: 1, 
      width: "100vw",
      height: "100vh",
      borderRadius: "0rem",
      ease: "none",
    }, 0)
    .to(textGroupRef.current, {
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px)",
      ease: "none",
    }, 0);
  }, { scope: containerRef });

  return (
    <div className="overflow-x-hidden bg-[#fafafa]">
      <section 
        ref={containerRef} 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div ref={textGroupRef} className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
          
          <h1 className="absolute top-[5%] left-1/2 -translate-x-1/2 text-orange-500 text-[12vw] font-bold tracking-tighter leading-none">
            creating
          </h1>

          <h1 className="absolute right-[14%] top-[35%] text-orange-500 text-[12vw] font-bold tracking-tighter leading-none">
            your
          </h1>

          <h1 className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-black text-[15vw] font-serif leading-none">
            story
          </h1>

          <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 text-orange-500 font-mono text-[10px] sm:text-xs space-y-4 opacity-80 uppercase tracking-widest">
            <div className="flex justify-between items-center gap-4">
               <span>{formatTime('Asia/Kolkata')}</span>
               <span className="text-black">INDIA</span>
            </div>
            <div className="flex justify-between items-center gap-4">
               <span>{formatTime('America/New_York')}</span>
               <span className="text-black">NEYWORK</span>
            </div>
            <div className="flex justify-between items-center gap-4">
               <span>{formatTime('Asia/Dubai')}</span>
               <span className="text-black">DUBAI</span>
            </div>
          </div>
        </div>

        <div 
          ref={videoWrapperRef}
          className="relative z-20 w-[50%] h-[50%] overflow-hidden rounded-lg mt-10 border border-white/5"
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover scale-110" 
          >
            <source src={video.video1} type="video/mp4" />
          </video>
        </div>

      </section>
    </div>
  );
};

export default Hero;