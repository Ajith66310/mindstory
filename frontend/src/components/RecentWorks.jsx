import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { img } from '../assets/assest.js';

gsap.registerPlugin(ScrollTrigger);

const RecentWorks = () => {
  const page1Ref = useRef(null);
  const cardsContainerRef = useRef(null);
  const titleRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: page1Ref,
    offset: ["start start", "end start"]
  });


  const titleX = useTransform(scrollYProgress, [0, 0.05], [0, -300]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const works = [
    {
      id: 1,
      company: 'TechCorp',
      title: 'Brand Transformation',
      category: 'Branding & Strategy',
      description: 'Complete digital overhaul for a leading technology company, resulting in 300% increase in brand engagement.',
      image: img.company,
      color: '#f5a300',
      gradient: 'from-amber-500 to-orange-600',
      results: '+300%',
      year: '2024',
    },
    {
      id: 2,
      company: 'FinanceHub',
      title: 'Digital Marketing',
      category: 'Marketing & Growth',
      description: 'Multi-channel marketing strategy that generated $2M+ in revenue within the first quarter.',
      image: img.company,
      color: '#3b82f6',
      gradient: 'from-blue-500 to-indigo-600',
      results: '$2M+',
      year: '2024',
    },
    {
      id: 3,
      company: 'EcoLife',
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Custom e-commerce solution with AI-powered recommendations, boosting conversions by 250%.',
      image: img.company,
      color: '#10b981',
      gradient: 'from-emerald-500 to-teal-600',
      results: '+250%',
      year: '2023',
    },
    {
      id: 4,
      company: 'MediaFlow',
      title: 'Social Media Strategy',
      category: 'Social Media',
      description: 'Viral social media campaign reaching 10M+ impressions across multiple platforms.',
      image: img.company,
      color: '#8b5cf6',
      gradient: 'from-violet-500 to-purple-600',
      results: '10M+',
      year: '2023',
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsContainerRef.current;
      const page = page1Ref.current;

      if (!cards || !page) return;

      const scrollDistance = cards.scrollWidth - window.innerWidth;

      gsap.to(cards, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: page,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
    }, page1Ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      id="page1"
      ref={page1Ref}
      className="relative w-full h-screen overflow-hidden bg-white"
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
      </div>



      <motion.div
        ref={titleRef}
        style={{
          x: titleX,
          opacity: titleOpacity
        }}
        className="absolute top-20 left-8 md:left-16 lg:left-24 z-20 max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 backdrop-blur-sm mb-6">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
            Our Portfolio
          </span>
        </div>

        <h2 id="recent" className="text-5xl md:text-7xl font-black text-gray-900 leading-none">
          Recent <br />
          <span id='work' className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Works
          </span>
        </h2>
      </motion.div>

      <div
        ref={cardsContainerRef}
        className="absolute top-0 left-0 h-full flex items-center gap-12 px-24 z-10 will-change-transform"
      >

        <div className="shrink-0 w-[35vw]" />

        {works.map((work, index) => (
          <div
            key={work.id}
            className="work-card relative shrink-0 group"
            style={{
              width: 'min(450px, 28vw)',
              minWidth: '350px',
              height: '65vh',
            }}
          >
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100 transition-all duration-700 group-hover:-translate-y-4">
              {/* Image Background */}
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Work Card details */}
              <div className="relative p-8 h-full flex flex-col justify-end bg-linear-to-t from-white via-white/80 to-transparent">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{work.category}</span>
                <h3 className="text-3xl font-black text-gray-900 mb-2">{work.company}</h3>
                <p className="text-gray-600 mb-6">{work.title}</p>
                {/* <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${work.gradient}`}>
                    <ArrowDownRight className="text-white" size={20} />
                  </div> */}
              </div>
              <div className="absolute top-8 right-8 text-8xl font-black opacity-[0.03] select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </div>
        ))}

        <div className="shrink-0 w-[20vw]" />
      </div>

    </div>
  );
};

export default RecentWorks;