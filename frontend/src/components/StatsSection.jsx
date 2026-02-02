import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedStats = ({ className = "" }) => {
  const containerRef = useRef(null);
  const headingLine1 = useRef(null);
  const headingLine2 = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { num: '+78', label: 'PROJECTS LAUNCHED' },
    { num: '+18', label: 'TEAM MEMBERS' },
    { num: '+23', label: 'LONG-TERM CLIENTS' },
    { num: '+12', label: 'CLIENT COUNTRIES' },
  ];

  const [counters, setCounters] = useState(
    stats.map(() => ({ current: '0' }))
  );

  useEffect(() => {
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const ctx = gsap.context(() => {

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

      statsRef.current.forEach((stat, i) => {
        if (!stat) return;

        ScrollTrigger.create({
          trigger: stat,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(stat,
              { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
              { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" }
            );
            animateCounter(i);
          },
          once: true,
        });

        gsap.to(stat, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: stat,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const animateCounter = (index) => {
    const targetValue = parseInt(stats[index].num.replace('+', ''), 10);
    const obj = { val: 0 };

    gsap.to(obj, {
      val: targetValue,
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: () => {
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = { current: `+${Math.floor(obj.val)}` };
          return newCounters;
        });
      },
      onComplete: () => {
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = { current: stats[index].num };
          return newCounters;
        });
      }
    });
  };

  return (
    <section
      ref={containerRef}
      className={`relative w-full py-24 md:py-40 bg-[#fafafa] overflow-hidden selection:bg-black selection:text-white ${className}`}
    >
      {/* HEADER SECTION */}
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-24 mb-32 leading-[0.8] select-none text-center md:text-left">
        <div className="overflow-hidden">
          <div ref={headingLine1} style={{ willChange: 'transform' }}>
            <span className="block text-[12vw] lg:text-[8vw] font-black tracking-[-0.05em] text-black uppercase">
              Numbers That
            </span>
          </div>
        </div>
        <div className="overflow-hidden md:pl-[5vw]">
          <div ref={headingLine2} style={{ willChange: 'transform' }}>
            <span className="block text-[12vw] lg:text-[8vw] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-linear-to-r from-[#f5a300] via-[#ff6b00] to-[#f5a300] bg-size-[200%_auto] animate-gradient uppercase italic">
              Tell Our Story
            </span>
          </div>
        </div>

        <div className="mt-12 max-w-2xl md:ml-auto md:text-right">
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
            Creativity thrives in what we learn and unlearn breaking old norms,
            embracing new ideas, and evolving every step of the way.
          </p>
        </div>
      </div>

      {/* STATS LIST SECTION */}
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col border-t border-gray-200">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={el => statsRef.current[i] = el}
              className={`flex items-center justify-between py-16 md:py-24 border-b border-gray-200 group transition-colors duration-700 hover:bg-white/50 ${i % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
            >
              {/* Label */}
              <div className={`w-1/2 ${i % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                <div className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tighter text-black group-hover:text-[#ff6b00] transition-colors duration-500">
                  {stat.label.split(' ').map((word, idx) => (
                    <React.Fragment key={idx}>{word}<br className="hidden md:block" /></React.Fragment>
                  ))}
                </div>
              </div>

              {/* Animated Number */}
              <div className={`w-1/2 ${i % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                <span className="text-7xl md:text-[10vw] font-black text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#f5a300] group-hover:to-[#ff6b00] transition-all duration-500 tracking-tighter leading-none">
                  {counters[i].current}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { 
          animation: gradient 4s ease infinite; 
        }
      `}</style>
    </section>
  );
};

export default AnimatedStats;