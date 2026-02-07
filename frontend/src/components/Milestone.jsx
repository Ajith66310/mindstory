import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Milestone = () => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const trackerRef = useRef(null);

  const rawData = [
    { level: 1, year: '2016', date: 'January, 2016', title: 'Inception of Excellence', desc: 'Mindstory embarked on its journey of digital excellence, laying the foundation for a dynamic digital marketing agency.', color: '#FF6B6B' },
    { level: 2, year: '2016', date: 'October, 2016', title: 'Cinematic Ventures Begin', desc: 'Venturing into the world of digital movie promotion, Mindstory expanded its horizons to engage audiences through captivating visual narratives.', color: '#4ECDC4' },
    { level: 3, year: '2017', date: 'December, 2017', title: 'Pioneering Media Production', desc: 'Recognizing the power of storytelling, Mindstory ventured into media production, creating compelling content that resonates with diverse audiences.', color: '#FFE66D' },
    { level: 4, year: '2018', date: 'February, 2018', title: 'Harmonious Expansion', desc: "The launch of Mindstory's own music production marked a harmonious milestone, adding a melodious dimension to our creative endeavors.", color: '#1A535C' },
    { level: 5, year: '2018', date: 'April, 2018', title: 'Global Operations Unleashed', desc: 'Mindstory extended its operations to the GCC region, bringing our digital prowess to a global stage.', color: '#FF8C42' },
    { level: 6, year: '2018', date: 'June, 2018', title: 'E-Commerce Eminence', desc: 'A specialized e-commerce marketing wing was initiated, addressing the unique challenges and opportunities in the digital retail landscape.', color: '#2BC016' },
    { level: 7, year: '2019', date: 'May, 2019', title: 'Google Ads Dominance', desc: 'Demonstrating commitment to digital advertising, Mindstory managed INR 10 Million exclusively for Google Ads for our clients.', color: '#A06CD5' },
  ];

  const timelineData = Object.values(rawData.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = { year: item.year, color: item.color, milestones: [] };
    }
    acc[item.year].milestones.push(item);
    return acc;
  }, {}));

  const svgPath = "M250.219 246.909C694.112 246.908 2762.22 -233.079 2762.22 1062.92C2762.22 2358.92 160 1350.93 160 2502.92C160 3654.92 2680.54 2486.93 2762.22 3894.93C2843.9 5302.93 160 4150.93 160 5414.93C160 6678.92 2779.9 5350.93 2971.9 6630.93C3163.9 7910.93 250.219 7303.37 250.219 8583.14C250.219 9862.92 3115.9 8326.92 3243.9 9478.92C3371.9 10630.9 1931.89 10678.9 2475.89 11462.9";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();

      gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom bottom",
          scrub: 2,
        }
      });

      tl.to(path, { strokeDashoffset: 0, ease: "none" }, 0);
      tl.to(trackerRef.current, {
        motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] },
        ease: "none"
      }, 0);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#fafafa] py-40 overflow-hidden">
      {/* Subtle Texture Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(#4B2C20 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto relative px-6">
        {/* Header */}
        <div className="mb-48 text-center relative z-20">
          <h2 className="text-6xl font-black text-[#4B2C20] uppercase tracking-tighter">
            Our <span className="text-[#FF6B00]">Milestones</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium mt-4">Journey of digital excellence through the years.</p>
        </div>

        {/* The Animated Path */}
        <div className="absolute inset-0 flex justify-center z-10 pointer-events-none mt-112.5">
          <svg width="1200" height="100%" viewBox="0 0 3412 11623" fill="none" preserveAspectRatio="xMidYMin meet" className="h-full opacity-60">
            {/* Static Background Path */}
            <path d={svgPath} stroke="#E8D5C4" strokeWidth="320" strokeLinecap="round" />
            
            {/* Growing Trail */}
            <path ref={pathRef} d={svgPath} stroke="url(#trailGradient)" strokeWidth="320" strokeLinecap="round" />

            <defs>
              <linearGradient id="trailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6B00" />
                <stop offset="100%" stopColor="#CC5500" />
              </linearGradient>
            </defs>

            {/* Tracker Ball */}
            <g ref={trackerRef}>
              <circle r="120" fill="white" opacity="0.4" filter="blur(15px)" />
              <circle r="90" fill="#4B2C20" stroke="white" strokeWidth="20" />
              <circle r="40" fill="white" className="animate-pulse" />
            </g>
          </svg>
        </div>

        {/* Timeline Cards */}
        <div className="relative z-30 space-y-64 pt-20">
          {timelineData.map((group, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <div className="w-full lg:w-[42%] bg-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(75,44,32,0.08)] border-b-8 border-gray-100 relative hover:shadow-2xl transition-shadow duration-500">
                  {/* Floating Year Badge */}
                  <div
                    className="absolute -top-6 left-10 px-8 py-3 rounded-full text-white font-bold text-2xl shadow-xl z-40"
                    style={{ backgroundColor: group.color }}
                  >
                    {group.year}
                  </div>

                  <div className="mt-6 space-y-8">
                    {group.milestones.map((m, mIdx) => (
                      <div key={mIdx} className="space-y-3">
                        <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: m.color }}>
                          {m.date}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                          {m.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed font-light">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Milestone;