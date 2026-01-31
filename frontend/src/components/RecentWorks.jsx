import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '../assets/assest.js';
import ElastiicLine from './ElasticLine.jsx';

gsap.registerPlugin(ScrollTrigger);

const RecentWorks = () => {
  const page1Ref = useRef(null);
  const cardsContainerRef = useRef(null);
  const headingLine1 = useRef(null);
  const headingLine2 = useRef(null);

  const works = [
    { id: 1, company: 'TechCorp', title: 'Brand Transformation', category: 'Branding & Strategy', image: img.company },
    { id: 2, company: 'FinanceHub', title: 'Digital Marketing', category: 'Marketing & Growth', image: img.company2 },
    { id: 3, company: 'EcoLife', title: 'E-commerce Platform', category: 'Web Development', image: img.company3 },
    { id: 4, company: 'MediaFlow', title: 'Social Media Strategy', category: 'Social Media', image: img.company4 },
  ];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      const cards = cardsContainerRef.current;
      const page = page1Ref.current;
      const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

      if (!cards || !page) return;

      const scrollDistance = cards.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: page,
          start: "top top",
          end: () => `+=${scrollDistance + window.innerHeight}`, 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      tl.fromTo(headingLine1.current, 
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1, ease }, 
        0 
      ).fromTo(headingLine2.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120, x: -30 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, x: 0, duration: 1.1, ease }, 
        0.1 
      );

      tl.addLabel("startScrolling", "+=0.5");

      tl.to([headingLine1.current, headingLine2.current], {
        opacity: 0,
        x: -150,
        duration: 1,
        ease: "power2.inOut"
      }, "startScrolling");

      tl.to(cards, {
        x: -scrollDistance,
        ease: "none",
        duration: 3 
      }, "startScrolling");

    }, page1Ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={page1Ref} className="relative w-full h-screen overflow-hidden bg-[#fafafa]">
    
      {/* HEADING */}
      <div className="absolute top-24 left-8 md:left-16 lg:left-24 z-5 select-none pointer-events-none leading-[0.8]">
        <div className="overflow-hidden">
          <div ref={headingLine1} style={{ willChange: 'transform' }}>
            <span className="block text-[12vw] lg:text-[9vw] font-black tracking-[-0.05em] text-black uppercase">
              Recent
            </span>
          </div>
        </div>
        <div className="overflow-hidden" style={{ paddingLeft: '4vw' }}>
          <div ref={headingLine2} style={{ willChange: 'transform' }}>
            <span className="block text-[12vw] lg:text-[9vw] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-600 to-orange-400 bg-size-[200%_auto] animate-gradient uppercase italic">
              Works
            </span>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div
        ref={cardsContainerRef}
        className="absolute top-0 -left-20 h-full flex items-center gap-12 px-5 z-10 will-change-transform"
      >
        <div className="shrink-0 w-[60vw]" />

        {works.map((work) => (
          <div
            key={work.id}
            className="work-card relative shrink-0 group"
            style={{ width: 'min(450px, 28vw)', minWidth: '350px', height: '65vh' }}
          >
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white border border-gray-100 transition-all duration-700  shadow-xl">
              <img
                src={work.image}
                alt={work.company}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-black/20 backdrop-blur-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:backdrop-blur-md">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  {work.category}
                </span>
                <h3 className="text-3xl font-black text-white mb-2 transform translate-y-4 transition-transform duration-500 delay-75 group-hover:translate-y-0">
                  {work.company}
                </h3>
                <p className="text-gray-200 mb-6 transform translate-y-4 transition-transform duration-500 delay-150 group-hover:translate-y-0">
                  {work.title}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* End Spacer */}
        
        <div className="shrink-0 w-[20vw]" />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradient 4s ease infinite; }
      `}</style>
    </div>
  );
};

export default RecentWorks;