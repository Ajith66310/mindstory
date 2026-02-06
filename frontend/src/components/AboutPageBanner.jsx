import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutBanner = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(bgRef.current, 
        { scale: 1.2, opacity: 0 }, 
        { scale: 1, opacity: 0.4, duration: 2 }
      );

      tl.from(titleRef.current.children, {
        y: 120,
        opacity: 0,
        rotateX: -30,
        duration: 1.2,
        stagger: 0.1,
      }, "-=1.5")

      .from([subtitleRef.current, ".hero-cta"], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      }, "-=0.8");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden px-6 md:px-12 lg:px-24">
      
      <div className="absolute inset-0 opacity-[0.05] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#f5a300 1px, transparent 1px), linear-gradient(90deg, #f5a300 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center grayscale shadow-inner"
        style={{ backgroundImage: 'url("/path-to-your-office-image.jpg")' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left">
       
        
        <div className="overflow-hidden mb-8">
          <h1 ref={titleRef} className="text-5xl md:text-8xl lg:text-[7rem] font-bold leading-[1.1] tracking-tight text-black">
            <div className="inline-block">Your Online</div>{' '}
            <div className="inline-block text-[#f5a300]">Marketing</div>
            <br className="hidden md:block" />
            <div className="inline-block">Agency in</div>{' '}
            <div className="inline-block">Kerala</div>
          </h1>
        </div>

        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-12 leading-relaxed mx-auto md:mx-0">
          Mindstory, your trusted partner in navigating the dynamic realm of digital marketing. 
          As the best digital marketing agency in <span className="text-[#f5a300] font-semibold">Thrissur and Kochi</span>, 
          we shape your brand's digital journey with passion and expertise.
        </p>

        <div className="hero-cta flex flex-wrap justify-center md:justify-start gap-6">
          <button 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative bg-[#f5a300] text-white px-12 py-5 rounded-full font-bold text-lg overflow-hidden transition-all shadow-xl"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;