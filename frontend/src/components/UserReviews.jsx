import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode } from 'swiper/modules';
import { Star } from 'lucide-react'; 
import 'swiper/css';
import 'swiper/css/free-mode';

import { img } from '../assets/assest';
import ElastiicLine from './ElasticLine';

const reviews = [
  { id: "01", name: "Alex Stevens", role: "CEO, Technova", text: "Mindstory transformed our digital presence. Their visionary approach is unmatched and highly professional.", img: img.company2 },
  { id: "02", name: "Sarah Jenkins", role: "Marketing Director", text: "The attention to detail they bring to a brand is simply architectural. Highly recommended for creative scale.", img: img.company3 },
  { id: "03", name: "Michael Chen", role: "Founder, Nexus", text: "A truly data-driven agency that doesn't sacrifice creativity. They delivered beyond our expectations.", img: img.company4 },
  { id: "04", name: "Emma Wilson", role: "Creative Lead", text: "They don't just build websites, they build digital experiences that convert and engage users.", img: img.company },
  { id: "05", name: "David Vogue", role: "Design Lead", text: "Redefining the standards of modern web design. The team is incredibly responsive and talented.", img: img.company2 },
];

export default function UserReviews() {
  return (
    <section className="bg-[#fafafa] w-full h-screen flex flex-col py-16 md:py-24 overflow-hidden select-none">
      
      {/* HEADER  */}
      <div className="w-full px-6 md:px-16 lg:px-24 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-600 font-mono font-bold tracking-[0.3em] mb-4 text-xs uppercase">
            // Client Testimonials
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase leading-[0.9]">
            REVIEWS
          </h2>
        </div>
      </div>

      {/*  SWIPER SECTION  */}
      <div className="w-full flex items-center mb-auto  ml-30 ">
        <Swiper
          modules={[Mousewheel, FreeMode]}
          spaceBetween={40}
          slidesPerView={'auto'}
          freeMode={true}
          mousewheel={{ forceToAxis: true }}
          className="w-full px-6 md:px-16 lg:px-24 overflow-visible!"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="w-[320px]! md:w-105!">
              <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.02)] h-full flex flex-col justify-between group hover:border-orange-200 transition-all duration-500">
                
                <div>
                  {/* Google Style Stars */}
                  <div className="flex gap-1 mb-6  text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed tracking-tight">
                    "{review.text}"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mt-10 ">
                  <div className="relative w-14 h-14 shrink-0">
                    <img 
                      src={review.img} 
                      alt={review.name} 
                      className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-4 border-white flex items-center justify-center">
                       <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-black text-black text-sm uppercase tracking-tight truncate">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mt-0.5 truncate">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="w-[20vw]!" />
        </Swiper>
      </div>

      {/* 3. FOOTER */}
      <div className="w-full px-6 md:px-16 lg:px-24 mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 opacity-20">
            <ElastiicLine />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">
            <span>Hold & Drag to navigate</span>
            <span>Scroll for more content</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-free-mode > .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
        }
      `}</style>
    </section>
  );
}