import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedBlogs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      title: "The digital marketing landscape has always evolved quickly, but 2026 marks a defining turning point. Artificial Intelligence is no longer just a tool that supports",
      category: "AI & TECHNOLOGY",
      date: "FEB 05, 2026"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "Google continues to refine its search ecosystem with the December 2025 Core Algorithm Update, a broad update that impacts search rankings across industries worldwide.",
      category: "SEO & UPDATES",
      date: "JAN 20, 2026"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
      title: "Unwanted or outdated pages showing up on Google can hurt your website's credibility, leak old data, or confuse visitors. In this guide, you'll learn how",
      category: "TECHNICAL SEO",
      date: "DEC 15, 2025"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      title: "Track your growth with Google Ads campaigns that drive results. For small businesses, digital advertising is one of the fastest ways to reach new customers",
      category: "PAID ADVERTISING",
      date: "NOV 02, 2025"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 150,
        rotateX: -45,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: i % 2 === 0 ? 100 : 200, 
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            scrub: 1
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-24 md:py-40 bg-[#fafafa] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        <div className="mb-30 relative">
          <p className="text-[#ff6b00] font-mono font-bold tracking-[0.3em]  text-xs uppercase">
            // Knowledge Hub
          </p>
          <h2 
            ref={headingRef}
            className="text-7xl md:text-[10vw] font-black text-black tracking-tighter uppercase leading-[0.8] mix-blend-difference"
          >
        <span className="text-gray-200">Featured Insights.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative flex flex-col"
            >
              <span className="absolute -top-12 -left-8 text-[12vw] font-black text-gray-100/50 pointer-events-none z-0">
                0{index + 1}
              </span>

              <div className="relative aspect-4/5 overflow-hidden rounded-sm z-10">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-20"></div>
                <img 
                  src={blog.image}
                  alt="Blog cover"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                
              
              </div>

              <div className="mt-10 z-20 px-2">
                <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest text-[#ff6b00] uppercase mb-4">
                  <span className="px-2 py-1 border border-[#ff6b00]/20 rounded-md">{blog.category}</span>
                  <span className="text-gray-400">{blog.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-snug   decoration-2 underline-offset-8 transition-all duration-500">
                  {blog.title}
                </h3>

                <div className="mt-8 flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-500">
                    Discover More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 flex justify-center">
            <button className="relative group overflow-hidden px-16 py-6 border border-black/10 rounded-full transition-all duration-500">
              <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                View All Articles
              </span>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black group-hover:h-full transition-all duration-500 ease-expo z-0"></div>
            </button>
        </div>
      </div>

      <style jsx global>{`
        .ease-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
      `}</style>
    </section>
  );
};

export default FeaturedBlogs;