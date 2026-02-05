import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MindstoryHubLight = () => {
  const containerRef = useRef(null);

  const services = [
    {
      id: "01",
      title: "Search Engine Optimization",
      description: "Dominating Google rankings through data-driven technical SEO and strategic content placement.",
      tag: "Growth"
    },
    {
      id: "02",
      title: "Art & Illustration",
      description: "Bespoke visual storytelling that creates an emotional connection between your brand and audience.",
      tag: "Creative"
    },
    {
      id: "03",
      title: "Social Media Strategy",
      description: "Building digital communities and enhancing brand voice across all major social platforms.",
      tag: "Engagement"
    },
    {
      id: "04",
      title: "Digital Advertising",
      description: "High-ROI campaigns utilizing advanced targeting and continuous performance optimization.",
      tag: "Performance"
    },
    {
      id: "05",
      title: "Custom Web Design",
      description: "High-performance websites that balance sophisticated aesthetics with seamless user experience.",
      tag: "Infrastructure"
    },
    {
      id: "06",
      title: "Email Marketing",
      description: "Personalized communication strategies designed to nurture leads and drive retention.",
      tag: "Retention"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Title Reveal (Masked effect)
      gsap.from('.reveal-text', {
        y: 120,
        ease: "power4.out",
        duration: 1.5,
        stagger: 0.1,
      });

      // Simple fade for description
      gsap.from('.hero-sub', {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 1,
        ease: "power3.out"
      });

      // Service items reveal
      gsap.utils.toArray('.service-item').forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out"
        });
      });

      // Line animations
      gsap.from('.divider-line', {
        scrollTrigger: {
          trigger: '.divider-line',
          start: "top 90%",
        },
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "expo.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .serif {
          font-family: 'Playfair Display', serif;
        }

        .title-mask {
          overflow: hidden;
          display: block;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="title-mask">
            <h1 className="reveal-text text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter">
              DIGITAL <span className="serif italic font-normal">Excellence</span>
            </h1>
          </div>
          <div className="title-mask">
            <h1 className="reveal-text text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter">
              BEYOND LIMITS.
            </h1>
          </div>

          <div className="hero-sub mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <p className="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed">
              Mindstory is a premium creative agency based in Thrissur, Kerala. 
              We blend technical precision with artistic intuition to elevate 
              modern brands into industry leaders.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-line h-px bg-slate-100 w-full mb-32" />

      {/* Services Grid */}
      <section className="px-8 pb-40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-16 block">Core Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {services.map((service) => (
              <div key={service.id} className="service-item border-t border-slate-100 pt-8 group">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono text-slate-400">{service.id}</span>
                    <span className="text-[10px] uppercase tracking-widest border border-slate-200 px-2 py-1 rounded-full group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                        {service.tag}
                    </span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default MindstoryHubLight;