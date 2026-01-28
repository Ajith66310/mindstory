import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { brands } from '../assets/assest.js';
import BrandCard from './BrandCard';

gsap.registerPlugin(ScrollTrigger);

const LeadingBrands = () => {
  const sectionRef = useRef(null);
  const brandsGridRef = useRef(null);
  const titleRef = useRef(null);
  const brandItemsRef = useRef([]);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const handleMouseMove = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power2.out',
        });

        gsap.to(cursorDotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      const titleWords = titleRef.current.querySelectorAll('.word');

      gsap.from(titleWords, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        rotationX: -45,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
      });

      brandItemsRef.current.forEach((item, i) => {
        if (item) {

          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
            scale: 0.7,
            opacity: 0,
            y: 80,
            rotation: Math.random() * 20 - 10,
            duration: 1.2,
            delay: (i % 5) * 0.1,
            ease: 'back.out(1.5)',
          });

          gsap.to(item, {
            y: '+=15',
            rotation: '+=3',
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.2,
          });
        }
      });

      gsap.to(brandsGridRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      return () => window.removeEventListener('mousemove', handleMouseMove);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 md:py-32 bg-linear-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-12 h-12 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          backgroundColor: '#f5a300',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-50"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">

        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5a300]/10 rounded-full border border-[#f5a300]/20">
            <div className="w-2 h-2 bg-[#f5a300] rounded-full animate-pulse" />
            <span className="text-xs font-bold text-[#f5a300] uppercase tracking-widest">
              Our Partners
            </span>
          </div>
        </div>

        <div ref={titleRef} className="text-center overflow-hidden">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            <span className="word inline-block text-gray-900">Brands</span>{' '}
            <span className="word inline-block text-gray-900">That</span>
            <br />
            <span className="word inline-block text-transparent bg-clip-text bg-linear-to-r from-[#f5a300] via-[#ff6b00] to-[#f5a300] bg-size-[200%_auto] animate-gradient">
              Trust
            </span>{' '}
            <span className="word inline-block text-gray-900">Us</span>
          </h2>
        </div>

        <p className="text-center text-gray-600 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
          Collaborating with industry pioneers to craft digital experiences 
          that set new standards in innovation and excellence.
        </p>
      </div>

      {/* Brands Grid */}
      <div 
        ref={brandsGridRef}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">

          {brands.map((brand, index) => (
            <div
              key={index}
              className={`
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                ${index === 4 ? 'lg:col-span-2' : ''}
                ${index === 7 ? 'lg:col-span-2' : ''}
              `}
            >
              <BrandCard
                brand={brand}
                index={index}
                brandItemsRef={brandItemsRef}
                cursorRef={cursorRef}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LeadingBrands;
