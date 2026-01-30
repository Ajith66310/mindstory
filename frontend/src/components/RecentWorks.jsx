import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '../assets/assest.js';

gsap.registerPlugin(ScrollTrigger);

const RecentWorks = () => {
  const page1Ref = useRef(null);
  const cardsContainerRef = useRef(null);
  const titleRef = useRef(null);

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
      const title = titleRef.current;

      if (!cards || !page) return;

      const scrollDistance = cards.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: page,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1
        }
      });

      tl.to(title, {
        x: -300,
        opacity: 0,
        ease: "none",
        duration: 0.1
      }, 0);

      tl.to(cards, {
        x: -scrollDistance,
        ease: "none",
        duration: 1
      }, 0);

    }, page1Ref);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      id="page1"
      ref={page1Ref}
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      <div
        ref={titleRef}
        className="absolute top-20 left-8 md:left-16 lg:left-24 z-20 max-w-2xl pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 backdrop-blur-sm mb-6">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Our Portfolio</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-none">
          Recent <br />
          <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Works
          </span>
        </h2>
      </div>

      {/* Cards Container */}
      <div
        ref={cardsContainerRef}
        className="absolute top-0 left-0 h-full flex items-center gap-12 px-24 z-10 will-change-transform"
      >
        <div className="shrink-0 w-[35vw]" />

        {works.map((work) => (
          <div
            key={work.id}
            className="work-card relative shrink-0 group"
            style={{ width: 'min(450px, 28vw)', minWidth: '350px', height: '65vh' }}
          >
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100 transition-all duration-700 group-hover:-translate-y-4">
              <img
                src={work.image}
                alt={work.company}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative p-8 h-full flex flex-col justify-end bg-linear-to-t from-white via-white/80 to-transparent">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  {work.category}
                </span>
                <h3 className="text-3xl font-black text-gray-900 mb-2">{work.company}</h3>
                <p className="text-gray-600 mb-6">{work.title}</p>
              </div>
            </div>
          </div>
        ))}

  
        <div className="shrink-0 w-[20vw]" />
      </div>
    </div>
  );
};

export default RecentWorks;