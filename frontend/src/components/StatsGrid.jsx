import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsGrid = () => {
  const containerRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { value: 400, suffix: '+', label: 'Clients Served' },
    { value: 100, suffix: '+', label: 'Events Organized' },
    { value: 10, suffix: '+', label: 'Movie Promotions' },
    { value: 999, suffix: '', label: 'Unlimited Coffee Cups', isInfinity: true },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".grid-line-v", {
        scaleY: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      gsap.from(".grid-line-h", {
        scaleX: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      statsRef.current.forEach((el, i) => {
        const targetValue = stats[i].value;
        gsap.fromTo(el,
          { textContent: 0 },
          {
            textContent: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            }
          }
        );
      });

      gsap.from(".mission-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".mission-text",
          start: "top 90%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#fafafa] py-32 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mt-40 text-center max-w-4xl mx-auto">
          <h3 className="mission-text text-orange-500 font-mono font-bold tracking-widest uppercase mb-6">
            #Getmindified
          </h3>
          <p className="mission-text text-3xl md:text-5xl font-bold text-black leading-tight tracking-tighter">
            We propel clients toward success by ensuring their websites rank at the pinnacle of search engines.
          </p>
          <p className="mission-text text-gray-500 text-xl mt-8 font-light">
            Achieving their goals and objectives seamlessly.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 border-gray-200">

          <div className="grid-line-v absolute left-1/2 top-0 w-pxh-full bg-orange-200 hidden md:block origin-top" />
          <div className="grid-line-h absolute left-0 top-1/2 w-full h-px bg-orange-200 hidden md:block origin-left" />

          {stats.map((stat, i) => (
            <div key={i} className="p-12 lg:p-20 flex flex-col items-center text-center">
              <div className="text-7xl lg:text-9xl font-black text-black flex items-baseline">
                <span ref={el => statsRef.current[i] = el}>0</span>
                <span className="text-orange-500">{stat.isInfinity ? '∞' : stat.suffix}</span>
              </div>
              <p className="text-sm font-mono uppercase tracking-[0.3em] text-gray-400 mt-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default StatsGrid;