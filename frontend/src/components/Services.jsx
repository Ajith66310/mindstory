import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { img } from '../assets/assest';
import ElastiicLine from './ElasticLine';


const services = [
  { id: 'seo', title: 'SEO', fullName: 'Search Engine Optimization', details: ['Google My Business Optimization', 'E-commerce SEO (Shopify/Woo)', 'High-Authority Link Building', 'Global Market Outreach'], image: img.company2 },
  { id: 'smm', title: 'SMM', fullName: 'Social Media Marketing', details: ['Instagram & Facebook Growth', 'Regional Content Creation', 'Influencer Collaborations', 'WhatsApp Marketing Automation'], image: img.company3 },
  { id: 'google-ads', title: 'ADS', fullName: 'Performance Marketing', details: ['Google Search & Display Ads', 'Real Estate Lead Generation', 'Youtube Video Advertising', 'Retargeting Campaigns'], image: img.company5 },
  { id: 'branding', title: 'BRAND', fullName: 'Branding & Design', details: ['Logo & Identity Design', 'Packaging & Print Media', 'Brand Storytelling', 'Marketing Collaterals'], image: img.company4 },
  { id: 'visual-prod', title: 'FILM', fullName: 'Visual Production', details: ['Ad Film Production', 'Product Photography', 'Short-form Video/Reels', 'Drone Videography'], image: img.company4 },
  { id: 'web-dev', title: 'WEB', fullName: 'Web Development', details: ['Responsive Business Websites', 'Custom E-commerce Stores', 'Landing Page Optimization', 'UI/UX Design'], image: img.company4 }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotRef = useRef(null);
  const menuRefs = useRef([]);
  const contentRef = useRef(null);

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
          { opacity: 0, y: 60, clipPath: 'inset(100% 0% 0% 0%)' },
          { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: "expo.out" }
        );
      }

      gsap.fromTo(".capability-item", 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power4.out", delay: 0.3 }
      );
    }

    setActiveIndex(index);
  };

  return (
    <section className="min-h-screen bg-[#fafafa] py-12 md:py-32 px-6 md:px-16 lg:px-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-350 mx-auto">
        
        <div className="flex flex-col mb-16 lg:mb-24">
          <div className="flex justify-between items-end">
            <div className="overflow-hidden">
              <h2 className="text-xs font-black tracking-[0.4em] text-gray-400 uppercase">
                Selected Capabilities
              </h2>
            </div>
            <span className="text-sm font-mono text-gray-400 font-bold hidden md:block">
              [{activeIndex + 1} &mdash; {services.length}]
            </span>
          </div>
          
          <div className="w-full -mt-4">
        <ElastiicLine/>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 relative">
            <div 
              ref={dotRef}
              className="absolute -left-12 w-4 h-4 bg-black rounded-full z-10 hidden lg:block shadow-[0_0_30px_rgba(0,0,0,0.15)]"
            />

            <nav className="flex flex-col">
              {services.map((service, index) => (
                <div key={service.id} className="border-b border-gray-100 lg:border-none overflow-hidden group">
                  <button
                    ref={el => menuRefs.current[index] = el}
                    onMouseEnter={() => window.innerWidth >= 1024 && moveDot(index)}
                    onClick={() => moveDot(index)}
                    className={`w-full text-left transition-all duration-700 ease-in-out py-6 lg:py-2 flex justify-between items-center lg:block ${
                      activeIndex === index 
                        ? 'lg:translate-x-4 opacity-100 text-black' 
                        : 'lg:translate-x-0 opacity-40 lg:opacity-10 text-gray-900'
                    }`}
                  >
                    <h3 className="text-3xl md:text-5xl lg:text-[10rem] font-black leading-[0.85] tracking-tight lg:tracking-[-0.06em] uppercase transition-transform lg:group-hover:italic">
                      {window.innerWidth >= 1024 ? service.title : service.fullName}
                    </h3>
                    <ChevronDown className={`lg:hidden transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-200 pb-10' : 'max-h-0'}`}>
                    <div className="space-y-8 pt-4">
                      <ul className="space-y-4">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-lg font-bold text-gray-700">
                            <span className="text-xs font-mono text-orange-500">0{idx + 1}</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-2xl overflow-hidden aspect-video ">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden lg:block lg:col-span-5 sticky top-32" ref={contentRef}>
            <div className="pl-10 space-y-16">
              <div className="space-y-8">
                <div>
                  <h4 className="text-4xl font-black mb-3 text-black tracking-tight leading-none uppercase">
                      {services[activeIndex].fullName}
                  </h4>
                  <div className="h-1 w-20 bg-orange-500" />
                </div>
                
                <ul className="space-y-5">
                  {services[activeIndex].details.map((detail, idx) => (
                    <li key={idx} className="capability-item flex items-baseline gap-4 text-xl font-bold text-gray-800">
                      <span className="text-xs font-mono text-orange-500">0{idx + 1}</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group overflow-hidden rounded-3xl aspect-4/5  bg-black">
                <img
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-[2.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;