import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brands } from '../assets/assest.js';
import BrandCard from './BrandCard';

gsap.registerPlugin(ScrollTrigger);

const LeadingBrands = () => {
  const sectionRef = useRef(null);
  const brandsGridRef = useRef(null);
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
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            },
            scale: 0.8,
            opacity: 0,
            y: 50,
            duration: 1,
            delay: (i % 5) * 0.1,
            ease: 'expo.out',
          });
        }
      });

      gsap.to(brandsGridRef.current, {
        y: -60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 md:py-40 bg-[#fafafa] overflow-hidden selection:bg-black selection:text-white"
    >
      {/*  HEADING*/}
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

        {/* Subtle Subtext */}
        <div className="mt-12 max-w-2xl ml-auto text-right">
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
            Partnering with visionaries to redefine digital excellence
            and establish market leadership.
          </p>
        </div>
      </div>

      {/* Brands Grid */}
      <div ref={brandsGridRef} className="max-w-350 mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                ${index === 4 ? 'lg:col-span-2' : ''}
              `}
            >
              <BrandCard
                brand={brand}
                index={index}
                brandItemsRef={brandItemsRef}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats section  */}
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-24 mt-48 border-t border-gray-200 pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
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