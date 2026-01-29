import React, { useEffect, useRef, useState } from 'react';
import { faqs } from '../assets/assest.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react'; 
import { NavLink } from 'react-router-dom';

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
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-white px-6 mt-20 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#f5a300] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Support
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-tight">
            Information <br /> & Help.
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col border-b border-gray-200">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              ref={(el) => (faqItemsRef.current[index] = el)}
              className="border-t border-gray-200 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors duration-300 px-4 md:px-6"
              >
                <div className="flex items-start gap-4 md:gap-6 flex-1">
                  {/* Number */}
                  <span className="text-[#f5a300] font-mono text-sm md:text-base font-bold mt-1 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Question */}
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold transition-colors duration-300 ${
                    activeIndex === index ? 'text-[#f5a300]' : 'text-black group-hover:text-[#f5a300]'
                  }`}>
                    {faq.question}
                  </h3>
                </div>

                {/* Chevron Icon */}
                <div className={`transition-all duration-300 p-2 rounded-full border-2 shrink-0 ml-4 ${
                  activeIndex === index 
                    ? 'rotate-180 bg-[#f5a300] text-white border-[#f5a300]' 
                    : 'text-black border-gray-300 group-hover:border-[#f5a300] group-hover:text-[#f5a300]'
                }`}>
                  <ChevronDown size={20} strokeWidth={2.5} />
                </div>
              </button>

              {/* Collapsible Answer */}
              <div 
                id={`faq-content-${index}`} 
                className="h-0 opacity-0 overflow-hidden"
              >
                <div className="pb-6 md:pb-8 px-4 md:px-6 pl-12 md:pl-20">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Still have questions? We're here to help.
          </p><NavLink to='/contact'>
          <button className="bg-[#f5a300] text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#e69500] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Contact Us
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Faq;