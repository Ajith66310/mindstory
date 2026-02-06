import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import animationData from '../assets/image.json';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const lottieRef = useRef(null);
  const titleRef = useRef(null);
  const tagRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = "In the vibrant digital marketing landscape, distinguishing your brand requires a partner like Mindstory, particularly for those aiming to lead in Kerala's digital spaces, including Kochi and Thrissur. Mindstory's approach is distinctive, merging cutting-edge strategies and engaging storytelling to ensure your brand's meaningful connection with its audience. Our commitment to your growth and deep understanding of Kerala's digital environment make us your ideal local partner with a global outlook. From customized SEO solutions to targeted advertising, we're dedicated to crafting a digital experience that aligns with your brand's goals. Choosing Mindstory means partnering with a team of digital marketers passionate about your success, ready to elevate your brand's presence across Kerala and beyond. Let's collaborate to create a standout digital identity for your brand.";

  useEffect(() => {
    const ctx = gsap.context(() => {

      const lottiePlayer = lottieRef.current;

      gsap.to(lottiePlayer, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
          onUpdate: (self) => {
            if (lottiePlayer) {
              const frame = self.progress * (lottiePlayer.getDuration(true) || 100);
              lottiePlayer.goToAndStop(frame, true);
            }
          },
        },
      });

      const textElement = textRef.current;
      const words = textElement.innerText.split(' ');
      textElement.innerHTML = words.map((word) =>
        `<span class="word-wrapper" style="display:inline-block; margin-right:0.25em; overflow:hidden">
          <span class="word" style="display:inline-block">${word}</span>
        </span>`
      ).join('');

      gsap.from(textElement.querySelectorAll('.word'), {
        y: 50,
        opacity: 0,
        stagger: 0.01,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textElement,
          start: "top 85%",
        },
      });

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      masterTl.from(tagRef.current, { x: -30, opacity: 0, duration: 0.6 })
        .from(titleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(buttonRef.current, { scale: 0.9, opacity: 0, duration: 0.5 }, "-=0.4");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#fafafa] px-6 md:px-16 lg:px-24 overflow-hidden pb-0"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        .font-heading { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .text-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .text-clamp.expanded { -webkit-line-clamp: unset; }
      `}</style>

      <div ref={containerRef} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start pt-12 md:pt-20 pb-0">

        <div className="lg:sticky lg:top-24 lg:h-112.5 flex justify-center items-center order-2 lg:order-1">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute w-[80%] h-[80%] bg-orange-50 rounded-full blur-[100px] opacity-20" />

            <div className="relative z-10 w-full max-w-112.5">
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={false}
                autoplay={false}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col order-1 lg:order-2 py-8">
          <span ref={tagRef} className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 font-body block">
            Partner with Our Agency
          </span>

          <h2 ref={titleRef} className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 font-heading leading-tight tracking-tighter">
            Why Choose <span className="text-orange-500">Mindstory?</span>
          </h2>

          <div className="relative">
            <p ref={textRef} className={`font-body text-lg md:text-xl leading-relaxed font-medium text-slate-800 text-clamp ${isExpanded ? 'expanded' : ''}`}>
              {fullText}
            </p>
            <button onClick={() => setIsExpanded(!isExpanded)} className="mt-3 text-orange-500 font-bold hover:underline font-body text-sm inline-flex items-center gap-1">
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>

          <div className="mt-8">
            <button ref={buttonRef} className="group relative px-8 py-4 bg-slate-900 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-orange-500">
              <span className="relative z-10 font-body uppercase tracking-widest text-xs">About Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;