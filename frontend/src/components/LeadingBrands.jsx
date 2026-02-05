import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img, svg } from '../assets/assest.js'; 

gsap.registerPlugin(ScrollTrigger);

const LeadingBrands = () => {
  const sectionRef = useRef(null);
  const headingLine1 = useRef(null);
  const headingLine2 = useRef(null);
  const brandHighlightRef = useRef(null);
  const brandItemsRef = useRef([]);
  const marqueeRef = useRef(null);

  const brands = [
    {  img: img.client1 },
    {  img: img.client2 },
    {  img: img.client3 },
    {  img: img.client4 },
    {  img: img.client5 },
    {  img: img.client6 },
    {  img: img.client7 },
    {  img: img.client8 },
    {  img: img.client9 },
    {  img: img.client10 },
    {  img: img.client11 },
    {  img: img.client12 },
    {  img: img.client13 },
  ];

  useEffect(() => {
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      tl.fromTo(
        headingLine1.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.2, ease },
        0.1
      )
      .fromTo(
        headingLine2.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 120 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.2, ease },
        0.3
      )
      .fromTo(
        brandHighlightRef.current,
        { scale: 0.5, opacity: 0, rotate: -3 },
        { 
          scale: 1, 
          opacity: 1, 
          rotate: 0, 
          duration: 1.2, 
          ease: "elastic.out(1, 0.8)" 
        },
        "-=0.5"
      );

      brandItemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.fromTo(item,
            { 
              opacity: 0,
              y: 40,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { 
                trigger: marqueeRef.current, 
                start: 'top 80%',
              },
              delay: i * 0.05
            }
          );
        }
      });

      const totalWidth = brandItemsRef.current[0]?.offsetWidth * brands.length;
      
      gsap.to(brandItemsRef.current, {
        x: -totalWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-24 md:pt-40 pb-0 bg-[#fafafa] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-5 mb-32 select-none">
        
        <div className="overflow-hidden mb-2 ">
          <div ref={headingLine1}>
            <span className="block text-6xl md:text-7xl lg:text-7xl font-black tracking-tighter text-black uppercase">
              Trusted by
            </span>
          </div>
        </div>

        <div className="relative inline-block  h-20">
          <div ref={headingLine2} className="flex flex-wrap items-center gap-x-2 md:gap-x-2">
            <span className="text-6xl md:text-7xl lg:text-7xl font-black tracking-tighter text-[#ff6b00] uppercase italic">
              Leading
            </span>
            
            <span className="relative h-20 inline-block text-6xl md:text-7xl lg:text-7xl font-black tracking-tighter text-[#ff6b00] uppercase italic px-4 md:px-8">
              Brands.
              
              <div 
                ref={brandHighlightRef}
                className="absolute left-45 top-[45%] -translate-x-1/2 -translate-y-1/2 w-full h-[120%] pointer-events-none z-[-1]"
              >
                <img 
                  src={svg.roundsvg} 
                  alt="" 
                  className="w-full h-full object-contain brightness-0 opacity-80" 
                />
              </div>
            </span>
          </div>
        </div>

        <div className="mt-16 max-w-xl">
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
            Our commitment to excellence has made us a preferred digital marketing agency for leading brands worldwide.
          </p>
        </div>
      </div>

      <div ref={marqueeRef} className="relative w-full mb-0 overflow-hidden">
        <div className="flex gap-24 md:gap-32 items-center py-8">
          {brands.map((brand, index) => (
            <div 
              key={`first-${index}`} 
              ref={(el) => (brandItemsRef.current[index] = el)} 
              className="group shrink-0 relative flex justify-center items-center"
            >
              <img 
                src={brand.img} 
                alt={`Brand ${index + 1}`}
                className="w-32 md:w-40 lg:w-48 h-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-110"
              />
            </div>
          ))}
          
          {brands.map((brand, index) => (
            <div 
              key={`second-${index}`} 
              ref={(el) => (brandItemsRef.current[index + brands.length] = el)} 
              className="group shrink-0 relative flex justify-center items-center"
            >
              <img 
                src={brand.img} 
                alt={`Brand ${index + 1}`}
                className="w-32 md:w-40 lg:w-48 h-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadingBrands;