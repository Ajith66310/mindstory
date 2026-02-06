import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Rocket, Target, Award, Zap, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  const sections = [
    {
      id: 1,
      icon: Sparkles,
      number: '01',
      title: 'Who We Are',
      subtitle: 'Your Digital Growth Partner',
      description: 'In a fast-paced digital era, having a reliable partner is crucial for sustained growth. At Mindstory, we are more than just a digital marketing agency; we are your digital growth partner.',
      color: '#f5a300'
    },
    {
      id: 2,
      icon: Rocket,
      number: '02',
      title: 'What We Do',
      subtitle: 'Turning Ideas into Realities',
      description: "We specialize in turning ideas into digital realities that resonate with your audience. Our services are meticulously crafted to thrive.",
      color: '#ff6b00'
    },
    {
      id: 3,
      icon: Award,
      number: '03',
      title: 'Digital Excellence',
      subtitle: 'Top Agency in Thrissur & Kochi',
      description: 'Our commitment to excellence and client-centric approach sets us apart. We tailor strategies that align with your business objectives.',
      color: '#f5a300'
    },
    {
      id: 4,
      icon: Target,
      number: '04',
      title: 'Why Choose Us',
      subtitle: 'Elevate Your Presence',
      description: "Choosing Mindstory means choosing a team dedicated to success. We go beyond conventional delivery to create connections.",
      color: '#ff8c00'
    },
    {
      id: 5,
      icon: Zap,
      number: '05',
      title: 'Success Driven',
      subtitle: 'Innovation & Strategy',
      description: 'We bring together innovation and strategy to guarantee success. Your brand deserves unparalleled digital experiences.',
      color: '#f5a300'
    },
    {
      id: 6,
      icon: Globe,
      number: '06',
      title: 'Global Vision',
      subtitle: 'Scaling New Heights',
      description: 'Our strategies are built for the global stage, ensuring your brand aesthetic and performance reach a world-wide audience.',
      color: '#ff6b00'
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%',
        }
      });

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fafafa] py-24 md:py-40 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <div ref={headingRef} className="mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-orange-500 mb-4">Discovery</p>
          <h2 className="text-5xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase">
            WHO WE ARE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              & WHAT WE DO
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border-gray-200 border">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                ref={el => cardsRef.current[index] = el}
                className="group relative bg-white p-10 md:p-14 transition-colors duration-300"
              >
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div 
                      className="p-4 rounded-full"
                      style={{ backgroundColor: `${section.color}10` }}
                    >
                      <Icon size={28} style={{ color: section.color }} strokeWidth={1.5} />
                    </div>
                    <span 
                      className="text-sm font-mono text-gray-300 font-bold transition-colors duration-300"
                      style={{ '--hover-color': section.color }}
                    >
                      <span className="group-hover:text-(--hover-color)">
                        {section.number}
                      </span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-black uppercase tracking-tight">
                      {section.title}
                    </h3>
                    <p className="text-xs font-bold text-orange-500 uppercase tracking-widest leading-none">
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Description turns black on hover */}
                  <p className="text-gray-500 group-hover:text-black leading-relaxed font-medium transition-colors duration-300">
                    {section.description}
                  </p>

                  <div className="pt-4 flex items-center gap-2">
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;800&display=swap');
        
        section {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        h2, h3 {
          letter-spacing: -0.02em;
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;