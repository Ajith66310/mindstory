import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blueprint = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const numberRefs = useRef([]);

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation and Brand Analysis',
      subtitle: 'Discovery Phase',
      desc: "At Mindstory, every successful digital marketing journey begins with a comprehensive consultation. We delve into your brand's core, understanding your mission, vision, and the unique challenges you face. This initial step is crucial in tailoring our strategies to fit your specific needs and objectives, setting a solid foundation for the digital marketing plan.",
      color: '#FF6B6B',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      number: '02',
      title: 'Market Research and Competitor Analysis',
      subtitle: 'Intelligence Gathering',
      desc: "We conduct thorough market research and competitor analysis to grasp the landscape you're operating in. This involves identifying trends, understanding customer behaviors, and analyzing what your competitors are doing right (or wrong). This insight allows us to position your brand effectively, ensuring your digital marketing efforts are not just seen, but also resonate with your target audience.",
      color: '#4ECDC4',
      gradient: 'from-cyan-400 to-teal-500'
    },
    {
      number: '03',
      title: 'Strategic Planning and Customized Campaign Design',
      subtitle: 'Creative Strategy',
      desc: "Leveraging the insights gained, we craft a strategic digital marketing plan that aligns with your business goals. Our team designs customized campaigns that blend creativity with analytics, ensuring your brand stands out in the bustling digital space. Whether it's SEO, social media, content marketing, or paid advertising, each strategy is tailored to drive maximum engagement and conversion.",
      color: '#A06CD5',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      number: '04',
      title: 'Implementation with Cutting-Edge Tools and Techniques',
      subtitle: 'Execution Excellence',
      desc: "With a robust plan in place, we bring your campaigns to life using the latest digital marketing tools and techniques. Our team's expertise in various digital platforms ensures that your brand message is delivered effectively, engaging your audience at the right time and on the right platforms.",
      color: '#1A535C',
      gradient: 'from-teal-600 to-cyan-700'
    },
    {
      number: '05',
      title: 'Continuous Monitoring and Data-Driven Optimization',
      subtitle: 'Performance Tuning',
      desc: "The digital world is ever-changing, and so are we. At Mindstory, we continuously monitor the performance of your campaigns, employing a data-driven approach to optimization. By analyzing real-time data, we make informed decisions to tweak and tune your strategies, ensuring sustained growth and improved ROI.",
      color: '#FF8C42',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      number: '06',
      title: 'Reporting and Strategic Insights',
      subtitle: 'Transparency & Partnership',
      desc: "Transparency is key to our partnership. We provide detailed reports and insights that not only highlight the success of your campaigns but also offer a clear view of areas for improvement. This ongoing communication ensures that you're always in the loop and that our strategies evolve in tandem with your brand's growth and the digital marketing landscape.",
      color: '#2BC016',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blueprint-title span", {
        y: 100,
        opacity: 0,
        rotateX: -90,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".blueprint-header",
          start: "top 80%",
        }
      });

      gsap.from(".blueprint-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blueprint-header",
          start: "top 80%",
        }
      });

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;

        gsap.from(card, {
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          delay: idx * 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        const numberEl = numberRefs.current[idx];
        if (numberEl) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            onEnter: () => {
              gsap.to(numberEl, {
                textContent: steps[idx].number,
                duration: 1.5,
                ease: "power2.out",
                snap: { textContent: 1 },
                modifiers: {
                  textContent: value => {
                    return Math.ceil(value).toString().padStart(2, '0');
                  }
                }
              });
            }
          });
        }

        card.addEventListener('mouseenter', (e) => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.6,
            ease: "power3.out"
          });
          
          const icon = card.querySelector('.step-icon');
          gsap.to(icon, {
            scale: 1.1,
            rotate: 5,
            duration: 0.4,
            ease: "back.out(2)"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out"
          });
          
          const icon = card.querySelector('.step-icon');
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: "back.out(2)"
          });
        });

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;

          gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1000
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      });

      gsap.from(".vision-mission-card", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".vision-mission-section",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 bg-[#fafafa] overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="blueprint-header text-center mb-32">
          <h2 className="blueprint-title text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-6 overflow-hidden">
            <span className="inline-block text-[#4B2C20]">Our 6-Step</span>{' '}
            <span className="inline-block">Digital</span>{' '}
            <span className="inline-block">Marketing</span>{' '}
            <span className="inline-block text-[#FF6B00]">Blueprint</span>
          </h2>
          <p className="blueprint-subtitle text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Empowering Your Brand's Journey Through Innovative Digital Strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className="group relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-200/50 flex flex-col h-full transition-all duration-500 will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${step.color}40, ${step.color}20)`
                }}
              />

              <div 
                className="step-icon relative w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-8 overflow-hidden"
                style={{ backgroundColor: step.color }}
              >
                <span 
                  ref={el => numberRefs.current[idx] = el}
                  className="relative z-10"
                >
                  00
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent, white)`
                  }}
                />
              </div>
              
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span 
                    className="text-xs font-black uppercase tracking-[0.2em]"
                    style={{ color: step.color }}
                  >
                    {step.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-[#4B2C20] mb-6 leading-tight">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base">
                  {step.desc}
                </p>
              </div>

              <div 
                className="absolute bottom-8 right-8 w-12 h-12 rounded-full opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-5"
                style={{ backgroundColor: step.color }}
              />
            </div>
          ))}
        </div>

        <div className="vision-mission-section grid lg:grid-cols-2 gap-8">
          <div className="vision-mission-card relative bg-linear-to-br from-[#4B2C20] via-[#5C3828] to-[#4B2C20] p-12 lg:p-16 rounded-[3rem] text-white overflow-hidden group">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}
              />
            </div>
            
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF6B00] rounded-full blur-3xl opacity-20 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-[#FF6B00] rounded-full animate-pulse" />
                <h3 className="text-4xl lg:text-5xl font-black text-[#FF6B00] tracking-tight">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg lg:text-xl font-light">
                At Mindstory, our vision is to redefine the digital marketing landscape by fostering innovative solutions that empower brands to connect with their audiences in the most authentic and impactful way. We strive to be the beacon of creativity and efficiency in digital marketing, continuously pushing the boundaries to enable businesses to thrive in the digital era. Our ultimate goal is to create a world where every brand story is heard, valued, and celebrated, driving not just digital transformation but meaningful connections.
              </p>
            </div>
          </div>

          <div className="vision-mission-card relative bg-white p-12 lg:p-16 rounded-[3rem] border-2 border-[#4B2C20]/10 overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-gray-50 opacity-50" />
            
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-linear-to-br from-purple-300 to-cyan-300 rounded-full blur-3xl opacity-10 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-[#4B2C20] rounded-full animate-pulse" />
                <h3 className="text-4xl lg:text-5xl font-black text-[#4B2C20] tracking-tight">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg lg:text-xl font-light">
                Our mission is to provide unparalleled digital marketing services that drive growth, engagement, and value for our clients. We are committed to understanding the unique essence of each brand, crafting bespoke strategies that resonate with target audiences and achieve measurable results. Through our expertise in digital marketing, combined with our dedication to client success, we aim to elevate brands, enhance online presences, and contribute to their overall success. At Mindstory, we are not just service providers; we are partners in your digital journey, dedicated to turning your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprint;