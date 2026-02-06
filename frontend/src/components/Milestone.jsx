import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Circle } from 'lucide-react';
import ElastiicLine from './ElasticLine';

gsap.registerPlugin(ScrollTrigger);

const Milestone = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const timelineItemsRef = useRef([]);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  const timelineData = [
    { year: '2016', date: 'January, 2016', title: 'Inception of Excellence', description: 'Mindstory embarked on its journey of digital excellence, laying the foundation for a dynamic digital marketing agency.', color: '#f5a300' },
    { year: '2017', date: 'October, 2016', title: 'Cinematic Ventures Begin', description: 'Venturing into the world of digital movie promotion, Mindstory expanded its horizons to engage audiences through captivating visual narratives.', color: '#ff6b00' },
    { year: '2017', date: 'December, 2017', title: 'Pioneering Media Production', description: 'Recognizing the power of storytelling, Mindstory ventured into media production, creating compelling content that resonates with diverse audiences.', color: '#f5a300' },
    { year: '2018', date: 'February, 2018', title: 'Harmonious Expansion', description: "The launch of Mindstory's own music production marked a harmonious milestone, adding a melodious dimension to our creative endeavors.", color: '#ff8c00' },
    { year: '2018', date: 'April, 2018', title: 'Global Operations Unleashed', description: 'Mindstory extended its operations to the GCC region, bringing our digital prowess to a global stage.', color: '#f5a300' },
    { year: '2018', date: 'June, 2018', title: 'E-Commerce Eminence', description: 'A specialized e-commerce marketing wing was initiated, addressing the unique challenges and opportunities in the digital retail landscape.', color: '#ff6b00' },
    { year: '2019', date: 'May, 2019', title: 'Google Ads Dominance', description: 'Demonstrating commitment to digital advertising, Mindstory managed INR 10 Million exclusively for Google Ads for our clients.', color: '#f5a300' },
    { year: '2020', date: 'August, 2020', title: 'Agile Workspaces', description: 'Adapting to changing landscapes, Mindstory systematically transitioned to a work-from-home model, fostering agility and continuity.', color: '#ff8c00' },
    { year: '2021', date: 'October, 2021', title: 'Financial Triumph', description: "Successfully orchestrating the complete digital marketing for Indel Money Limited's public issue of NCDs.", color: '#f5a300' },
    { year: '2023', date: 'December, 2023', title: 'Triple Triumph', description: 'Carrying the momentum forward, Mindstory orchestrated three impactful digital marketing campaigns for the public issuance of NCDs, solidifying its position as a trusted partner for financial institutions.', color: '#ff6b00' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const luxuryEase = "expo.out";

      gsap.from([headingRef.current, subHeadingRef.current], {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: luxuryEase,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2.5,
          ease: "none",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );

      timelineItemsRef.current.forEach((item, index) => {
        if (!item) return;
        const isLeft = index % 2 === 0;

        gsap.from(item, {
          opacity: 0,
          x: isLeft ? -60 : 60,
          duration: 1.2,
          ease: luxuryEase,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        });

        gsap.to(item.querySelector('.timeline-dot'), {
          scale: 1.3,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#fafafa] py-32 px-6 lg:px-24 overflow-hidden text-black">

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="mb-32 text-center md:text-left">
          <h2 ref={headingRef} className="text-[12vw] lg:text-[8vw] font-black uppercase tracking-tighter leading-[0.85] italic mb-6">
            Our <span className="text-transparent  bg-clip-text bg-linear-to-r from-orange-400 to-amber-600">Milestones</span>
          </h2>
          <p ref={subHeadingRef} className="text-lg md:text-2xl font-light text-gray-400 max-w-2xl tracking-wide">
            Some remarkable events our digital marketing agency went through.
          </p>
        </div>

        <div className="relative">
          <div ref={lineRef} className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-orange-500 via-amber-400 to-transparent hidden lg:block origin-top" />

          <div className="space-y-24 md:space-y-32">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={el => timelineItemsRef.current[index] = el}
                  className={`relative grid lg:grid-cols-2 gap-12 items-center ${isLeft ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`${isLeft ? 'lg:text-right lg:pr-20' : 'lg:pl-20 lg:col-start-2'}`}>
                    <div className="space-y-4">
                      <span className="text-6xl lg:text-8xl font-black opacity-40 absolute -top-10 left-0 lg:relative lg:top-0 block" style={{ color: item.color }}>
                        {item.year}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{item.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed font-light">{item.description}</p>
                      <div className="text-xs font-mono tracking-widest uppercase text-orange-500/60 pt-2">
                        — {item.date}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="timeline-dot w-4 h-4 rounded-full bg-black z-20 relative shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                      <Circle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-pulse" size={40} style={{ color: item.color }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-40 opacity-30">
          <ElastiicLine color="#ffffff" />
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;900&display=swap');
        body { font-family: 'Inter', sans-serif; background: #0a0a0a; }
        h2 { font-family: 'Inter', sans-serif; font-weight: 900; }
      `}</style>
    </section>
  );
};

export default Milestone;