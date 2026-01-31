import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { img } from '../assets/assest';
import ElasticLine from './ElasticLine';

const services = [
  { id: 'seo', title: 'SEO', fullName: 'Search Engine Optimization', details: ['Google My Business Optimization', 'E-commerce SEO (Shopify/Woo)', 'High-Authority Link Building', 'Global Market Outreach'], image: img.company2 },
  { id: 'smm', title: 'SMM', fullName: 'Social Media Marketing', details: ['Instagram & Facebook Growth', 'Regional Content Creation', 'Influencer Collaborations', 'WhatsApp Marketing Automation'], image: img.company3 },
  { id: 'google-ads', title: 'ADS', fullName: 'Performance Marketing', details: ['Google Search & Display Ads', 'Real Estate Lead Generation', 'Youtube Video Advertising', 'Retargeting Campaigns'], image: img.company5 },
  { id: 'branding', title: 'BRAND', fullName: 'Branding & Design', details: ['Logo & Identity Design', 'Packaging & Print Media', 'Brand Storytelling', 'Marketing Collaterals'], image: img.company4 },
  { id: 'visual-prod', title: 'FILM', fullName: 'Visual Production', details: ['Ad Film Production', 'Product Photography', 'Short-form Video/Reels', 'Drone Videography'], image: img.company4 },
  { id: 'web-dev', title: 'WEB', fullName: 'Web Development', details: ['Responsive Business Websites', 'Custom E-commerce Stores', 'Landing Page Optimization', 'UI/UX Design'], image: img.company4 }
];

const SelectedCapabilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotRef = useRef(null);
  const menuRefs = useRef([]);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      moveDot(0);
    }
  }, []);

  const moveDot = (index) => {
    const target = menuRefs.current[index];
    
    if (window.innerWidth >= 1024) {
      if (target && dotRef.current) {
        const { offsetTop, offsetHeight } = target;
        gsap.to(dotRef.current, {
          y: offsetTop + offsetHeight / 2 - 8,
          duration: 0.8,
          ease: "expo.out"
        });
      }

      if (contentRef.current) {
        gsap.fromTo(contentRef.current, 
          { opacity: 0, y: 40, clipPath: 'inset(100% 0% 0% 0%)' },
          { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: "expo.out" }
        );
      }

      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { opacity: 0, scale: 0.9, x: 20 },
          { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: "power4.out" }
        );
      }

      gsap.fromTo(".capability-item", 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: "power3.out", delay: 0.2 }
      );
    }

    setActiveIndex(index);
  };

  return (
    <section className="min-h-screen bg-[#fafafa] py-12 md:py-32 px-6 md:px-16 lg:px-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-450 mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <div className="flex justify-between items-end">
            <h2 className="text-xs font-black tracking-[0.4em] text-gray-400 uppercase">
              Selected Capabilities
            </h2>
            <span className="text-sm font-mono text-gray-400 font-bold hidden md:block">
              [{activeIndex + 1} &mdash; {services.length}]
            </span>
          </div>
          <div className="w-full -mt-4">
            <ElasticLine />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 relative">
            <div 
              ref={dotRef}
              className="absolute -left-10 w-4 h-4 bg-black rounded-full z-10 hidden lg:block shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            />
            <nav className="flex flex-col">
              {services.map((service, index) => (
                <div key={service.id} className="border-b border-gray-100 lg:border-none group">
                  <button
                    ref={el => menuRefs.current[index] = el}
                    onMouseEnter={() => window.innerWidth >= 1024 && moveDot(index)}
                    onClick={() => moveDot(index)}
                    className={`w-full text-left transition-all duration-500 py-6 lg:py-2 flex justify-between items-center lg:block ${
                      activeIndex === index 
                        ? 'lg:translate-x-4 opacity-100 text-black' 
                        : 'lg:translate-x-0 opacity-20 hover:opacity-40 text-gray-900'
                    }`}
                  >
                    <h3 className="text-4xl md:text-5xl lg:text-[7.5rem] font-black leading-[0.85] tracking-tight lg:tracking-[-0.05em] uppercase transition-transform lg:group-hover:italic">
                      {service.title}
                    </h3>
                    <ChevronDown className={`lg:hidden transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mobile View Content */}
                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-125 pb-10' : 'max-h-0'}`}>
                    <ul className="space-y-4 pt-4">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-lg font-bold text-gray-700">
                          <span className="text-xs font-mono text-orange-500">0{idx + 1}</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden lg:block lg:col-span-3 sticky top-40" ref={contentRef}>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 italic">/ Capabilities</p>
                <h4 className="text-3xl font-black text-black leading-tight uppercase mb-6">
                    {services[activeIndex].fullName}
                </h4>
                <div className="h-1 w-12 bg-black" />
              </div>
              
              <ul className="space-y-6">
                {services[activeIndex].details.map((detail, idx) => (
                  <li key={idx} className="capability-item flex items-baseline gap-4 text-lg font-bold text-gray-800">
                    <span className="text-[10px] font-mono text-orange-500">0{idx + 1}</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 sticky top-40" ref={imageRef}>
            <div className="relative group overflow-hidden rounded-2xl aspect-3/4 bg-gray-200">
              <img
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute bottom-6 right-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white p-4 rounded-full shadow-xl">
                  <ArrowRight className="text-black" size={24} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SelectedCapabilities;