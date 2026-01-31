import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brands } from '../assets/assest.js';
import ElastiicLine from './ElasticLine.jsx';

gsap.registerPlugin(ScrollTrigger);

const LeadingBrands = () => {
  const sectionRef = useRef(null);
  const brandsContainerRef = useRef(null);
  const headingLine1 = useRef(null);
  const headingLine2 = useRef(null);
  const brandItemsRef = useRef([]);

  useEffect(() => {
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      tl.fromTo(
        headingLine1.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.4, ease },
        0.1
      );

      tl.fromTo(
        headingLine2.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120, x: -30 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, x: 0, duration: 1.5, ease },
        0.25
      );

      brandItemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.fromTo(item,
            { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: item,
                start: 'top 95%',
              },
              delay: (i % 3) * 0.1
            }
          );

          gsap.to(item, {
            x: i % 2 === 0 ? 20 : -20,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 md:py-40 bg-[#fafafa] overflow-hidden selection:bg-black selection:text-white"
    >
      {/* HEADING */}
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-24 mb-32 leading-[0.8] select-none">
        <div className="overflow-hidden">
          <div ref={headingLine1} style={{ willChange: 'transform' }}>
            <span className="block text-[15vw] lg:text-[11vw] font-black tracking-[-0.05em] text-black uppercase">
              Brands That
            </span>
          </div>
        </div>
        <div className="overflow-hidden" style={{ paddingLeft: '5vw' }}>
          <div ref={headingLine2} style={{ willChange: 'transform' }}>
            <span className="block text-[15vw] lg:text-[11vw] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-linear-to-r from-[#f5a300] via-[#ff6b00] to-[#f5a300] bg-size-[200%_auto] animate-gradient uppercase italic">
              Trust Us
            </span>
          </div>
        </div>

        <div className="mt-12 max-w-2xl ml-auto text-right">
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
            Partnering with visionaries to redefine digital excellence
            and establish market leadership.
          </p>
        </div>
      </div>

      <div ref={brandsContainerRef} className="max-w-350 mx-auto px-6 md:px-16 lg:px-24 mb-48">
        <div className="flex flex-wrap gap-x-12 gap-y-8 md:gap-x-20 md:gap-y-16 justify-center items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              ref={(el) => (brandItemsRef.current[index] = el)}
              className="group cursor-default"
            >
              <h4 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-300 group-hover:text-black transition-colors duration-500 lowercase tracking-tighter">
                {brand.name || "Brand"}
                <span className="text-[#f5a300] opacity-0 group-hover:opacity-100 transition-opacity">.</span>
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Stats section */}
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-24 mt-48 pt-20">
        <div className="w-full -mt-4">
          <ElastiicLine />
        </div>
        <div className="flex flex-row justify-between ">
          {[
            { num: '10+', label: 'Years Experience' },
            { num: '500+', label: 'Happy Clients' },
            { num: '50+', label: 'Countries' },
            { num: '98%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="text-6xl md:text-7xl font-black mb-2 text-black tracking-tighter group-hover:text-[#ff6b00] transition-colors duration-500">
                {stat.num}
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-black">
                {stat.label}
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
        .animate-gradient { animation: gradient 4s ease infinite; }
      `}</style>
    </section>
  );
};

export default LeadingBrands;