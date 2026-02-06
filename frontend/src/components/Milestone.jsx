import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Milestone = () => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const trackerRef = useRef(null);
  // const itemRefs = useRef([]);

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

      // itemRefs.current.forEach((el) => {
      //   if (el) {
      //     gsap.from(el, {
      //       scale: 0.9,
      //       opacity: 0,
      //       y: 50,
      //       duration: 0.8,
      //       scrollTrigger: {
      //         trigger: el,
      //         start: "top 75%",
      //         toggleActions: "play none none reverse"
      //       }
      //     });
      //   }
      // });
    }, sectionRef);
    return () => ctx.revert();
  }, [timelineData]);

  const svgPath = "M250.219 246.909C694.112 246.908 2762.22 -233.079 2762.22 1062.92C2762.22 2358.92 160 1350.93 160 2502.92C160 3654.92 2680.54 2486.93 2762.22 3894.93C2843.9 5302.93 160 4150.93 160 5414.93C160 6678.92 2779.9 5350.93 2971.9 6630.93C3163.9 7910.93 250.219 7303.37 250.219 8583.14C250.219 9862.92 3115.9 8326.92 3243.9 9478.92C3371.9 10630.9 1931.89 10678.9 2475.89 11462.9";

  return (
    <section ref={sectionRef} className="relative bg-[#fafafa] py-40 overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(#FF8C42 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-32 text-center">
          <h2 className="text-6xl font-black text-[#4B2C20] drop-shadow-md italic uppercase tracking-widest">
            Our <span className="bg-linear-to-r from-[#f5a300] via-[#ff6b00] to-[#f5a300] bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium mt-4">Journey of digital excellence through the years.</p>
        </div>

        <div className="absolute inset-0 flex justify-center z-10 pointer-events-none mt-112.5 mb-40">
          <svg width="1200" height="100%" viewBox="0 0 3412 11623" fill="none" preserveAspectRatio="xMidYMin meet" className="h-full drop-shadow-2xl opacity-60">
            <path d={svgPath} stroke="#E8D5C4" strokeWidth="320" strokeLinecap="round" />
            <path ref={pathRef} d={svgPath} stroke="url(#trailGradient)" strokeWidth="320" strokeLinecap="round" />

            <defs>
              <linearGradient id="trailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#CC5500" />
                <stop offset="50%" stopColor="#FFB347" />
                <stop offset="100%" stopColor="#CC5500" />
              </linearGradient>
            </defs>

            <g ref={trackerRef} style={{ visibility: 'hidden' }}>
              <circle r="120" fill="white" opacity="0.3" filter="blur(15px)" />
              <circle r="90" fill="#4B2C20" stroke="white" strokeWidth="20" />
              <circle r="40" fill="white" className="animate-pulse" />
            </g>
          </svg>
        </div>

        <div className="space-y-64 relative z-30 px-10">
          {timelineData.map((group, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <div
                  // ref={el => itemRefs.current[idx] = el}
                  className="w-full lg:w-[42%] bg-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(75,44,32,0.12)] border-b-8 border-gray-100 relative"
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