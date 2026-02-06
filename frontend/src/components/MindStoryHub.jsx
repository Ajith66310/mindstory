import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ElasticLine from './ElasticLine';

gsap.registerPlugin(ScrollTrigger);

const MindstoryHub = () => {
  const containerRef = useRef(null);
  const descriptionRef = useRef(null);

  const services = [
    {
      id: "01",
      title: "RANKING YOUR SITE #1 ON GOOGLE",
      description: "Master the strategies to dominate Google rankings with our specialized SEO techniques. We dive deep into search algorithms to elevate your site's visibility, driving organic traffic and leading your business to digital prominence.",
      tag: "Growth"
    },
    {
      id: "02",
      title: "BRAND ENHANCEMENT WITH ART & ILLUSTRATION",
      description: "Elevate your brand's appeal through our captivating art and illustration. Our creative flair ensures your brand makes an unforgettable impact, distinguishing itself in the competitive landscape.",
      tag: "Creative"
    },
    {
      id: "03",
      title: "SOCIAL MEDIA BRAND BOOST",
      description: "Boost your brand's social media presence with our targeted strategies. We enhance engagement, increase visibility, and strengthen community ties, ensuring your brand's voice resonates across platforms.",
      tag: "Engagement"
    },
    {
      id: "04",
      title: "DIGITAL AD STRATEGY FOR IMPACT",
      description: "Maximize your digital ad impact with our expert strategies. Our data-driven approach optimizes ad placements, ensuring your message reaches and engages your target audience effectively.",
      tag: "Performance"
    },
    {
      id: "05",
      title: "CUSTOM WEB DESIGN THAT STANDS OUT",
      description: "Craft a unique online identity with our custom web design. Our blend of creativity and functionality ensures your website captivates visitors and communicates your brand's essence clearly.",
      tag: "Infrastructure"
    },
    {
      id: "06",
      title: "DRIVING ENGAGEMENT WITH EMAIL CAMPAIGNS",
      description: "Elevate audience engagement with dynamic email campaigns. Our combination of compelling visuals and strategic messaging fosters meaningful interactions, keeping your audience connected and engaged with your brand.",
      tag: "Retention"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(descriptionRef.current, {
        color: "#ff6900",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        }
      });

      gsap.utils.toArray('.service-item').forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-fit bg-[#fafafa] text-slate-900 selection:bg-slate-900 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;900&family=General+Sans:wght@400;500;600;700&display=swap');
        
        .font-heading {
          font-family: 'Space Grotesk', sans-serif;
        }
        .font-body {
          font-family: 'General Sans', sans-serif;
        }
      `}</style>

      <section className="px-6 md:px-16 lg:px-24 pt-16 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase font-body mb-4">
            Our Expertise in Digital Marketing
          </h2>

          <p
            ref={descriptionRef}
            className="text-gray-400 text-xl md:text-2xl font-medium transition-colors duration-300 font-body max-w-4xl leading-relaxed"
          >
            Mindstory, the best digital marketing agency in Thrissur, Kerala is your go-to hub for all things digital. From SEO to custom website design, we offer a comprehensive suite of services to elevate your brand and drive business growth.
          </p>

          <div className="w-full -mt-2 md:-mt-4">
            <ElasticLine />
          </div>
        </div>
      </section>

      <section className="px-8 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {services.map((service) => (
              <div key={service.id} className="service-item border-t border-slate-100 pt-8 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-orange-400">{service.id}</span>
                  <span className="text-[10px] uppercase tracking-widest border border-slate-200 px-2 py-1 rounded-full group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 font-body">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500 font-heading">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindstoryHub;