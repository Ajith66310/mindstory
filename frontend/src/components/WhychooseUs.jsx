import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '../assets/assest';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.fromTo(
        textRef.current,
        { color: "rgba(31, 41, 55, 0.2)" }, 
        {
          color: "rgba(31, 41, 55, 1)",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 60%", 
            scrub: true,
          },
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      tl.from(".animate-tag", { opacity: 0, y: 20, duration: 0.8 })
        .from(".animate-title", { 
          clipPath: "inset(0 100% 0 0)", 
          duration: 1, 
          ease: "expo.out" 
        }, "-=0.4")
        .from(".animate-btn", { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#fafafa] px-6 md:px-16 lg:px-24"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
        
        .font-heading { font-family: 'Archivo Black', sans-serif; }
        .font-body { font-family: 'General Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        <div className="lg:sticky lg:top-0 lg:h-screen flex justify-center items-center order-2 lg:order-1 py-12 lg:py-0">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute w-[80%] h-[80%] bg-orange-100 rounded-full blur-3xl opacity-50" />
            
            <div ref={imageRef} className="relative z-10 w-full max-w-125">
              <img 
                src={img.roboinsofa} 
                alt="Mindstory Astronaut" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col order-1 lg:order-2 py-24 md:py-32 lg:py-48">
          <span className="animate-tag text-orange-500 font-bold tracking-widest text-sm uppercase mb-4 font-body block">
            Partner with Our Digital Marketing Agency for Growth!
          </span>
          
          <h2 className="animate-title text-5xl md:text-7xl font-black text-slate-900 mb-8 font-heading leading-tight">
            Why Choose <span className="text-orange-500">Mindstory?</span>
          </h2>

          <div className="relative">
            <p 
              ref={textRef}
              className="font-body text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium text-slate-800"
            >
              In the vibrant digital marketing landscape, distinguishing your brand requires a partner like Mindstory, particularly for those aiming to lead in Kerala's digital spaces, including Kochi and Thrissur. Mindstory's approach is distinctive, merging cutting-edge strategies and engaging storytelling to ensure your brand's meaningful connection with its audience. Our commitment to your growth and deep understanding of Kerala's digital environment make us your ideal local partner with a global outlook. From customized SEO solutions to targeted advertising, we're dedicated to crafting a digital experience that aligns with your brand's goals. Choosing Mindstory means partnering with a team of digital marketers passionate about your success, ready to elevate your brand's presence across Kerala and beyond. Let's collaborate to create a standout digital identity for your brand.
            </p>
          </div>

          <div className="mt-12 animate-btn">
            <button className="group relative px-8 py-4 bg-orange-500 text-white font-bold rounded-xl overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10 font-body uppercase tracking-wider">About Us</span>
              <div className="absolute inset-0 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;