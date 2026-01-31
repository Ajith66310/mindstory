import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { img } from '../assets/assest'; 
import ElasticLine from './ElasticLine';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);
  const dotRef = useRef(null);
  const menuRefs = useRef([]);
  const rightContentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (window.innerWidth >= 1024) {
        services.forEach((_, index) => {
          ScrollTrigger.create({
            trigger: menuRefs.current[index],
            start: "top center",
            end: "bottom center",
            onEnter: () => updateContent(index),
            onEnterBack: () => updateContent(index),
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const updateContent = (index) => {
    setActiveIndex(index);

    const target = menuRefs.current[index];
    if (target && dotRef.current) {
      const { offsetTop, offsetHeight } = target;
      gsap.to(dotRef.current, {
        y: offsetTop + offsetHeight / 2 - 6,
        duration: 0.6,
        ease: "power3.out"
      });
    }

    gsap.fromTo(rightContentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }
    );

    gsap.fromTo(".capability-item",
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }
    );
  };

  return (
    <section ref={containerRef} className="bg-[#fafafa] py-16 md:py-32 px-6 md:px-16 lg:px-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-350 mx-auto">

        {/* Header Section */}
        <div className="flex flex-col mb-12 lg:mb-16">
          <div className="flex justify-between items-end">
            <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-gray-400 uppercase">Selected Capabilities</h2>
            <span className="text-sm font-mono text-gray-400 font-bold hidden md:block">
              [{activeIndex + 1} — {services.length}]
            </span>
          </div>
          <div className="w-full -mt-2 md:-mt-4">
            <ElasticLine />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          <div className="lg:col-span-5 relative pb-[40vh]">
            <div
              ref={dotRef}
              className="absolute -left-10 w-3 h-3 bg-black rounded-full z-10 hidden lg:block"
              style={{ pointerEvents: 'none' }}
            />

            <nav className="flex flex-col border-r border-gray-100/50">
              {services.map((service, index) => (
                <div key={service.id} className="group border-b border-gray-100 lg:border-none">
                  <div
                    ref={el => menuRefs.current[index] = el}
                    className={`w-full text-left transition-all duration-500 py-6 lg:py-8 flex justify-between items-center lg:block cursor-pointer ${activeIndex === index ? 'opacity-100' : 'opacity-10 grayscale'
                      }`}
                  >
                    <h3 className="text-4xl md:text-6xl lg:text-[7.5rem] font-black leading-[0.8] tracking-tighter uppercase transition-transform group-hover:translate-x-2">
                      {service.title}
                    </h3>
                    <ChevronDown className={`lg:hidden transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                  </div>

                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-250 pb-10' : 'max-h-0'}`}>
                    <ul className="space-y-4 pt-4">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-lg font-bold text-gray-700">
                          <span className="text-xs font-mono text-orange-500">0{idx + 1}</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <img src={service.image} className="mt-6 rounded-xl w-full aspect-video object-cover" alt="" />
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden lg:block lg:col-span-7 sticky top-[20%] h-fit" ref={rightContentRef}>
            <div className="grid grid-cols-12 gap-8 items-center">

              {/* Text Area */}
              <div className="col-span-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 italic">/ Capabilities</p>
                <h4 className="text-2xl font-black text-black leading-tight uppercase mb-8">
                  {services[activeIndex].fullName}
                </h4>

                <ul className="space-y-6">
                  {services[activeIndex].details.map((detail, idx) => (
                    <li key={idx} className="capability-item flex items-start gap-4 text-lg font-bold text-gray-800 leading-snug">
                      <span className="text-[11px] font-mono text-orange-500 pt-1 shrink-0">0{idx + 1}</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-7">
                <div className="relative group overflow-hidden rounded aspect-4/5 bg-gray-100 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    key={services[activeIndex].image}
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
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