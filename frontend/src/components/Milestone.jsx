import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Milestone = () => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const trackerRef = useRef(null);
  const itemRefs = useRef([]);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();

      gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

      gsap.set(trackerRef.current, {
        autoAlpha: 1, 
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 0
        }
      });

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

      itemRefs.current.forEach((el) => {
        if (el) {
          gsap.from(el, {
            scale: 0.8,
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: "top 55%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [timelineData]);

  return (
    <section ref={sectionRef} className="relative bg-[#fafafa] py-40 overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(#FF8C42 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-64 text-center">
          <h2 className="text-6xl font-black text-[#4B2C20] drop-shadow-md italic uppercase tracking-widest">
            Our <span className="bg-linear-to-r from-[#f5a300] via-[#ff6b00] to-[#f5a300] bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium mt-4">Journey of digital excellence through the years.</p>
        </div>

        <div className="absolute inset-0 flex justify-center pl-20 py-80 pointer-events-none">
          <svg width="1000" height="100%" viewBox="0 0 1801 7140" fill="none" preserveAspectRatio="xMidYMin meet" className="h-full drop-shadow-2xl">
            <path d="M1016.64 150.537C1016.64 150.537 -7.36325 518.537 184.637 1126.54C376.638 1734.54 1115.86 742.537 1432.64 1510.54C1749.41 2278.54 376.637 1878.54 376.637 2502.54C376.637 3126.54 1640.64 2534.54 1640.64 3174.54C1640.64 3814.54 203.863 3327.55 203.863 3951.55C203.863 4575.55 1263.09 4006.54 1451.86 4630.54C1640.64 5254.54 272.162 5302.54 324.399 5718.54C376.637 6134.54 1432.64 5670.54 1432.64 6230.54C1432.64 6790.54 488.638 6982.54 488.638 6982.54"
              stroke="#E8D5C4" strokeWidth="200" strokeLinecap="round" />
            <path ref={pathRef} d="M1016.64 150.537C1016.64 150.537 -7.36325 518.537 184.637 1126.54C376.638 1734.54 1115.86 742.537 1432.64 1510.54C1749.41 2278.54 376.637 1878.54 376.637 2502.54C376.637 3126.54 1640.64 2534.54 1640.64 3174.54C1640.64 3814.54 203.863 3327.55 203.863 3951.55C203.863 4575.55 1263.09 4006.54 1451.86 4630.54C1640.64 5254.54 272.162 5302.54 324.399 5718.54C376.637 6134.54 1432.64 5670.54 1432.64 6230.54C1432.64 6790.54 488.638 6982.54 488.638 6982.54"
              stroke="url(#trailGradient)" strokeWidth="180" strokeLinecap="round" />
            <defs>
              <defs>
                <linearGradient id="trailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF8C42" />
                  <stop offset="15%" stopColor="#FF8C42" />
                </linearGradient>
              </defs>
            </defs>
            <g ref={trackerRef} className="opacity-0">
              <circle r="75" fill="white" opacity="0.3" filter="blur(10px)" />
              <circle r="60" fill="#4B2C20" stroke="white" strokeWidth="15" />
              <circle r="25" fill="white" className="animate-pulse" />
            </g>
          </svg>
        </div>

        <div className="space-y-64 relative z-20 px-10">
          {timelineData.map((group, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <div
                  ref={el => itemRefs.current[idx] = el}
                  className="w-full lg:w-[40%] bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(75,44,32,0.15)] border-b-8 border-gray-200"
                >
                  <div className="flex items-center gap-6 mb-8 border-b pb-4">
                    <div className="text-5xl font-black text-[#4B2C20] opacity-20">{group.year}</div>
                    <div className="h-10 w-1 rounded-full" style={{ backgroundColor: group.color }}></div>
                  </div>

                  <div className="space-y-8">
                    {group.milestones.map((m, mIdx) => (
                      <div key={mIdx} className="relative pl-6 border-l-2 border-gray-100">
                        <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full" style={{ backgroundColor: m.color }}></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">{m.date}</span>
                        <h3 className="text-xl font-black text-[#4B2C20] mb-2">{m.title}</h3>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed">{m.desc}</p>
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