import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '../assets/assest.js'; // Ensure correct import path
import ElastiicLine from './ElasticLine.jsx';

gsap.registerPlugin(ScrollTrigger);

const LeadingBrands = () => {
  const sectionRef = useRef(null);
  const brandsContainerRef = useRef(null);
  const headingLine1 = useRef(null);
  const headingLine2 = useRef(null);
  const brandItemsRef = useRef([]);

  const brands = [
    { name: 'Apple', img: img.client1 },
    { name: 'Google', img: img.client2 },
    { name: 'Microsoft', img: img.client3 },
    { name: 'Amazon', img: img.client4 },
    { name: 'Tesla', img: img.client5 },
    { name: 'Nike', img: img.client6 },
  ];

  useEffect(() => {
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const ctx = gsap.context(() => {

      // Heading Animation
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
      ).fromTo(
        headingLine2.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120, x: -30 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, x: 0, duration: 1.5, ease },
        0.25
      );

      // Brand Items Animation
      brandItemsRef.current.forEach((item, i) => {
        if (item) {
          // Entrance
          gsap.fromTo(item,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
              },
              delay: (i % 3) * 0.1
            }
          );

          // Parallax Scroll
          gsap.to(item, {
            x: i % 2 === 0 ? 30 : -30,
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
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-32 leading-[0.8] select-none">
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

      {/* BRANDS IMAGES GRID */}
      <div ref={brandsContainerRef} className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-48">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16 md:gap-x-24 md:gap-y-32 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              ref={(el) => (brandItemsRef.current[index] = el)}
              className="group relative w-full flex justify-center items-center"
            >
              <img 
                src={brand.img} 
                alt={brand.name}
                className="w-32 md:w-48 lg:w-56 h-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110 select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mt-48 pt-20">
        <div className="w-full -mt-4">
          <ElastiicLine />
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