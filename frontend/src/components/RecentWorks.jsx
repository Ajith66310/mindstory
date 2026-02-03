import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '../assets/assest.js';

gsap.registerPlugin(ScrollTrigger);

const RecentWorks = () => {
  const page1Ref = useRef(null);
  const cardsContainerRef = useRef(null);
  const headingLine1 = useRef(null);
  const headingLine2 = useRef(null);
  const textRecentRef = useRef(null);

  const works = [
    { id: 1, company: 'TechCorp', title: 'Brand Transformation', category: 'Branding & Strategy', image: img.company2 },
    { id: 2, company: 'FinanceHub', title: 'Digital Marketing', category: 'Marketing & Growth', image: img.company },
    { id: 3, company: 'EcoLife', title: 'E-commerce Platform', category: 'Web Development', image: img.company3 },
    { id: 4, company: 'MediaFlow', title: 'Social Media Strategy', category: 'Social Media', image: img.company4 },
    { id: 5, company: 'MediaFlow', title: 'Social Media Strategy', category: 'Social Media', image: img.company2 },
    { id: 6, company: 'MediaFlow', title: 'Social Media Strategy', category: 'Social Media', image: img.company3 },
  ];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)"
    }, (context) => {
      let { isDesktop } = context.conditions;
      const cards = cardsContainerRef.current;
      const page = page1Ref.current;
      const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

      if (!cards || !page) return;

      const scrollDistance = cards.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: isDesktop ? page : headingLine1.current,
          start: isDesktop ? "top top" : "top 85%",
          end: isDesktop ? () => `+=${scrollDistance + window.innerHeight}` : "bottom 20%",
          scrub: 1,
          pin: isDesktop,
          invalidateOnRefresh: true,
        }
      });

      // 1. Initial State: White to Black + Text to White
      tl.to(page, { backgroundColor: "#000000", duration: 1, ease: "none" }, 0)
        .to(textRecentRef.current, { color: "#ffffff", duration: 1, ease: "none" }, 0);

      // Heading Entrance
      tl.fromTo(headingLine1.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1, ease },
        0
      ).fromTo(headingLine2.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120, x: -30 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, x: 0, duration: 1.1, ease },
        0.1
      );

      if (isDesktop) {
        tl.addLabel("startScrolling", "+=0.5");

        tl.to([headingLine1.current, headingLine2.current], {
          opacity: 0,
          x: -150,
          duration: 1,
          ease: "power2.inOut"
        }, "startScrolling");

        // 2. Horizontal Scroll
        tl.to(cards, {
          x: -scrollDistance,
          ease: "none",
          duration: 3
        }, "startScrolling");

        // 3. Middle/End: Transition back to #fafafa
        // We trigger this shortly after the horizontal scroll starts
        tl.to(page, { 
          backgroundColor: "#fafafa", 
          duration: 1.5, 
          ease: "none" 
        }, "startScrolling+=1.5");

        tl.to(textRecentRef.current, { 
          color: "#000000", 
          duration: 1.5, 
          ease: "none" 
        }, "startScrolling+=1.5");
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={page1Ref} className="relative w-full lg:h-screen bg-[#fafafa] overflow-x-hidden lg:overflow-hidden">

      {/* HEADING */}
      <div className="relative lg:absolute pt-24 lg:pt-0 lg:top-24 left-8 md:left-16 lg:left-24 z-5 select-none pointer-events-none leading-[0.8]">
        <div className="overflow-hidden">
          <div ref={headingLine1} style={{ willChange: 'transform' }}>
            <span ref={textRecentRef} className="block text-[15vw] lg:text-[9vw] font-black tracking-[-0.05em] text-black uppercase">
              Recent
            </span>
          </div>
        </div>
        <div className="overflow-hidden" style={{ paddingLeft: '4vw' }}>
          <div ref={headingLine2} style={{ willChange: 'transform' }}>
            <span className="block text-[15vw] lg:text-[9vw] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-600 to-orange-400 bg-size-[200%_auto] animate-gradient uppercase italic">
              Works
            </span>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div
        ref={cardsContainerRef}
        className="relative lg:absolute top-0 lg:-left-20 w-full lg:w-auto h-auto lg:h-full flex flex-col lg:flex-row items-center lg:gap-12 px-6 lg:px-5 pb-20 lg:pb-0 mt-12 lg:mt-0 z-10 will-change-transform"
      >
        <div className="shrink-0 hidden lg:block w-[60vw]" />

        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-3 lg:gap-12 w-full lg:w-auto">
          {works.map((work) => (
            <div
              key={work.id}
              className="work-card relative shrink-0 group w-full lg:w-[min(450px,28vw)] lg:min-w-87.5 aspect-3/4 lg:h-[65vh]"
            >
              <div className="relative h-full w-full rounded-lg lg:rounded-xl overflow-hidden bg-white transition-all duration-700 shadow-xl">
                <img
                  src={work.image}
                  alt={work.company}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 p-3 lg:p-8 flex flex-col justify-end bg-black/40 lg:bg-black/20 backdrop-blur-0 opacity-100 lg:opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:backdrop-blur-md">
                  <span className="text-[8px] lg:text-xs font-bold uppercase tracking-widest text-orange-400 mb-1 lg:mb-2 transform lg:translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    {work.category}
                  </span>
                  <h3 className="text-sm lg:text-3xl font-black text-white mb-0 lg:mb-2 transform lg:translate-y-4 transition-transform duration-500 delay-75 group-hover:translate-y-0">
                    {work.company}
                  </h3>
                  <p className="hidden lg:block text-xs lg:text-base text-gray-200 mb-2 lg:mb-6 transform lg:translate-y-4 transition-transform duration-500 delay-150 group-hover:translate-y-0">
                    {work.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shrink-0 hidden lg:block w-[20vw]" />
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