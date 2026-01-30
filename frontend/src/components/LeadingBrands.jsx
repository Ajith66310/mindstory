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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title wave animation
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

      // Grid items scale and fade in
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

          // Continuous floating animation
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

      // Parallax scroll effect on entire grid
      gsap.to(brandsGridRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 md:py-32 bg-linear-to-br from-white via-gray-50 to-white overflow-hidden"
    >

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
      <div ref={brandsGridRef} className="max-w-7xl mx-auto px-6 md:px-12">
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
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee text at bottom */}
      <div className="mt-32 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-300">
                TRUSTED BY THE BEST
              </span>
              <span className="text-6xl md:text-8xl font-black text-[#f5a300]">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '10+', label: 'Years Experience' },
            { num: '500+', label: 'Happy Clients' },
            { num: '50+', label: 'Countries' },
            { num: '98%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-linear-to-br from-[#f5a300] to-[#ff6b00] group-hover:scale-110 transition-transform duration-500">
                {stat.num}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob { animation: blob 20s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradient 3s ease infinite; }
      `}</style>
    </section>
  );
};

export default LeadingBrands;