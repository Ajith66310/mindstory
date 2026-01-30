import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { img } from '../assets/assest';

const services = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    details: [
      'Google My Business Optimization',
      'E-commerce SEO (Shopify/Woo)',
      'High-Authority Link Building',
      'Global Market Outreach'
    ],
    image: img.company2
  },
  {
    id: 'smm',
    title: 'Social Media Marketing (SMM)',
    details: [
      'Instagram & Facebook Growth',
      'Regional Content Creation',
      'Influencer Collaborations',
      'WhatsApp Marketing Automation',
      'Community Management'
    ],
    image: img.company3
  },
  {
    id: 'google-ads',
    title: 'Performance Marketing',
    details: [
      'Google Search & Display Ads',
      'Real Estate Lead Generation',
      'Youtube Video Advertising',
      'Retargeting Campaigns',
    ],
    image: img.company5
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    details: [
      'Logo & Identity Design',
      'Packaging & Print Media',
      'Brand Storytelling',
      'Marketing Collaterals'
    ],
    image: img.company4
  },
  {
    id: 'visual-prod',
    title: 'Visual Production',
    details: [
      'Ad Film Production',
      'Product Photography',
      'Short-form Video/Reels',
      'Drone Videography'
    ],
    image: img.company4
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    details: [
      'Responsive Business Websites',
      'Custom E-commerce Stores',
      'Landing Page Optimization',
      'UI/UX Design',
      'Website Maintenance'
    ],
    image: img.company4
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotRef = useRef(null);
  const menuRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    moveDot(0);
  }, []);

  const moveDot = (index) => {
    const target = menuRefs.current[index];
    if (target && dotRef.current) {
      const { offsetTop, offsetHeight } = target;
      gsap.to(dotRef.current, {
        y: offsetTop + offsetHeight / 2 - 12, 
        duration: 0.6,
        ease: "power3.out"
      });
    }

    if (contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
    setActiveIndex(index);
  };

  return (
    <section className="min-h-screen bg-white py-12 md:py-24 px-6 md:px-16 lg:px-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-350 mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16  pb-6 inline-block tracking-tight">
          SERVICES
        </h2>

        <div className="grid lg:grid-cols-12 gap-29 items-start">
          
          <div className="lg:col-span-6 relative">
            <div className="flex flex-col relative">
              
              {/* Desktop Indicator Dot */}
              <div 
                ref={dotRef}
                className="absolute right-0 w-6 h-6 bg-black rounded-full z-10 hidden lg:block"
                style={{ pointerEvents: 'none' }}
              />

              {services.map((service, index) => (
                <div key={service.id} className="border-b border-gray-100 lg:border-none">
                  <button
                    ref={el => menuRefs.current[index] = el}
                    onMouseEnter={() => moveDot(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left text-3xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tighter py-6 lg:py-2 transition-opacity duration-300 pr-12 flex justify-between items-center lg:block ${
                      activeIndex === index ? 'opacity-100' : 'opacity-30 lg:opacity-15'
                    }`}
                  >
                    {service.title}
                    <ChevronDown className={`lg:hidden transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} size={24} />
                  </button>

                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-250 pb-8' : 'max-h-0'}`}>
                    <ul className="space-y-4 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-lg font-medium text-gray-700">
                          <span className="w-1.5 h-1.5 bg-black rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6 sticky top-24 pt-4" ref={contentRef}>
            <div className="flex flex-row gap-12">
              
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Capabilities</p>
                <ul className="space-y-3">
                  {services[activeIndex].details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg font-medium text-gray-800">
                      <span className="mt-2.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <div className="relative aspect-3/4 overflow-hidden rounded-lg group shadow-lg">
                  <img
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  
                  <div className="absolute bottom-6 right-6 bg-white p-5 shadow-2xl max-w-45 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-gray-500">Explore Case Study</p>
                     <ArrowRight size={24} className="text-black" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;