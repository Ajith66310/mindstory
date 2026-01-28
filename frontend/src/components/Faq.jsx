import React, { useEffect, useRef, useState } from 'react';
import { faqs } from '../assets/assest.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react'; 

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const faqItemsRef = useRef([]);

  // Toggle Accordion Function
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal on scroll
      faqItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          delay: index * 0.1,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // GSAP animation for the answer slide
  useEffect(() => {
    faqs.forEach((_, index) => {
      const content = document.getElementById(`faq-content-${index}`);
      if (activeIndex === index) {
        gsap.to(content, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(content, { height: 0, opacity: 0, duration: 0.4, ease: "power2.in" });
      }
    });
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-black px-6 md:px-12 lg:px-24">
      <div className="max-w-300 mx-auto">
        
        <div className="mb-16">
          <p className="text-[#f5a300] text-xs font-bold uppercase tracking-[0.3em] mb-4">Support</p>
          <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tighter">
            Information <br /> & Help.
          </h2>
        </div>

        <div className="flex flex-col border-b border-white/10">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              ref={(el) => (faqItemsRef.current[index] = el)}
              className="border-t border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-start gap-6">
                  <span className="text-[#f5a300] font-mono text-sm mt-1">
                    {faq.id < 10 ? `0${faq.id}` : faq.id}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${activeIndex === index ? 'text-[#f5a300]' : 'text-white group-hover:text-gray-400'}`}>
                    {faq.question}
                  </h3>
                </div>

                {/* New Icon: Rotating Chevron */}
                <div className={`transition-transform duration-500 p-2 rounded-full border border-white/10 ${activeIndex === index ? 'rotate-180 bg-[#f5a300] text-black border-[#f5a300]' : 'text-white'}`}>
                  <ChevronDown size={20} strokeWidth={1.5} />
                </div>
              </button>

              {/* Collapsible Content */}
              <div 
                id={`faq-content-${index}`} 
                className="h-0 opacity-0 overflow-hidden pointer-events-none"
              >
                <div className="pb-8 `pl-17 max-w-2xl">
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;