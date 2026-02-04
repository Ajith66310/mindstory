import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img, svg } from '../assets/assest'; 
import ElasticLine from './ElasticLine';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: 'seo', title: 'SEO', fullName: 'Search Engine Optimization', details: ['Google My Business Optimization', 'E-commerce SEO (Shopify/Woo)', 'High-Authority Link Building', 'Global Market Outreach'], image: img.company2, svg: svg.curvedunderline, description: 'Improve your website’s visibility and rank higher on search engines with strategic SEO. We optimize content, fix technical issues, and build authority to bring in consistent organic traffic.' },
  { id: 'smm', title: 'SMM', fullName: 'Social Media Marketing', details: ['Instagram & Facebook Growth', 'Regional Content Creation', 'Influencer Collaborations', 'WhatsApp Marketing Automation'], image: img.company3, svg: svg.curvedunderline, description: 'Build a strong social presence with creative content, targeted ads, and data-driven strategies. We help you connect with your audience and grow brand awareness across major platforms.' },
  { id: 'google-ads', title: 'ADS', fullName: 'Performance Marketing', details: ['Google Search & Display Ads', 'Real Estate Lead Generation', 'Youtube Video Advertising', 'Retargeting Campaigns'], image: img.company5, svg: svg.curvedunderline, description: 'Get instant visibility and fast results with optimized Google Ads campaigns. We target high-intent keywords and manage budgets efficiently to maximize your ROI.' },
  { id: 'branding', title: 'BRAND', fullName: 'Branding & Design', details: ['Logo & Identity Design', 'Packaging & Print Media', 'Brand Storytelling', 'Marketing Collaterals'], image: img.company4, svg: svg.curvedunderline, description: 'Build a memorable brand identity with strategic branding solutions. From logos to messaging, we help you create a distinct presence that builds long-term trust.' },
  { id: 'visual-prod', title: 'FILM', fullName: 'Visual Production', details: ['Ad Film Production', 'Product Photography', 'Short-form Video/Reels', 'Drone Videography'], image: img.company4, svg: svg.curvedunderline, description: 'Deliver your message with stunning visuals. We produce explainer videos, product films, and campaign content that enhance engagement and elevate your brand’s storytelling.' },
  { id: 'web-dev', title: 'WEB', fullName: 'Web Development', details: ['Responsive Business Websites', 'Custom E-commerce Stores', 'Landing Page Optimization', 'UI/UX Design'], image: img.company4, svg: svg.curvedunderline, description: 'Create a fast, responsive, and user-friendly website. We design and develop modern UI/UX with strong performance to convert visitors into loyal customers.' }
];

const SelectedCapabilities = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardRefs.current;

      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: cards[cards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
          });

          ScrollTrigger.create({
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.set(card, {
                scale: 1 - progress * 0.1,
                rotation: index % 2 === 0 ? progress * 4 : -progress * 4,
                rotationX: index % 2 === 0 ? progress * 12 : -progress * 12,
                transformOrigin: "center center",
              });
              
              const overlay = card.querySelector('.card-overlay');
              if (overlay) {
                gsap.set(overlay, { opacity: progress * 0.5 });
              }
            }
          });
        }

        const underline = card.querySelector('.curved-underline');
        if (underline) {
          gsap.fromTo(underline, 
            { scaleX: 0, opacity: 0, transformOrigin: "left center" },
            { 
              scaleX: 1, 
              opacity: 1, 
              duration: 1.2, 
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top center",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#fafafa] selection:bg-black selection:text-white">
      <div className="px-6 md:px-16 lg:px-24 pt-16 md:pt-32">
        <div className="max-w-350 mx-auto flex flex-col mb-12">
          <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-gray-400 uppercase">
            Selected Capabilities
          </h2>
          <div className="w-full -mt-2 md:-mt-4">
            <ElasticLine />
          </div>
        </div>
      </div>

      <div className="relative">
        {services.map((service, index) => (
          <section
            key={service.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-full min-h-screen bg-[#fafafa] border-b border-gray-200 flex items-center justify-center p-6 md:p-16 lg:px-24 relative overflow-hidden"
            style={{ perspective: '1200px' }}
          >
            <div className="card-overlay absolute inset-0 bg-black opacity-0 pointer-events-none z-10" />

            <div className="max-w-350 w-full grid lg:grid-cols-12 gap-12 items-center relative z-20">
              {/* Left Content Side */}
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-4xl md:text-6xl font-mono text-gray-300 block mb-4">
                  (0{index + 1})
                </span>
                <h3 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.8] tracking-tighter uppercase text-black mb-6">
                  {service.title}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-500 uppercase tracking-widest relative inline-block">
                    {service.fullName}
                    <div className="curved-underline absolute -bottom-3 left-0 w-full pointer-events-none">
                      <img 
                        src={service.svg} 
                        alt="" 
                        className="w-full h-auto"
                        style={{ 
                          filter: 'invert(82%) sepia(24%) saturate(1633%) hue-rotate(331deg) brightness(102%) contrast(101%)'
                        }}
                      />
                    </div>
                  </h4>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md font-medium">
                  {service.description}
                </p>
              </div>

              {/* Right Side: Details & Image */}
              <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg font-bold text-gray-800 leading-tight">
                      <span className="text-[11px] font-mono text-orange-500 pt-1">0{idx + 1}</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/5 bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SelectedCapabilities;