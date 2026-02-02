import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Plus, Hash } from "lucide-react";
import { img } from "../assets/assest";

gsap.registerPlugin(ScrollTrigger);

const MindStoryHero = () => {
  const containerRef = useRef();

  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block translate-y-[110%] opacity-0">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to(".hero-title-main .char", {
        yPercent: -100,
        opacity: 1,
        stagger: 0.01,
        duration: 1.2,
      })
      .from(".image-tile", {
        scale: 0.8,
        filter: "blur(10px)",
        opacity: 0,
        stagger: 0.15,
        duration: 1.5
      }, "-=0.8")
      .from(".meta-label", {
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 1
      }, "-=1");

      const mainScroll = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 1.2, 
          pin: true,
        }
      });

      mainScroll
        .to(".hero-title-main", {
          scale: 1.1,
          opacity: 0,
          filter: "blur(15px)",
          y: -100,
        })
        .to(".image-tile-1", { yPercent: -150, rotate: -15, scale: 0.5 }, 0)
        .to(".image-tile-2", { yPercent: -120, rotate: 15, scale: 0.5 }, 0)
        .to(".image-tile-3", { yPercent: -140, xPercent: 50, scale: 0.5 }, 0)
        .to(".reveal-full", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }, 0.1)
        .from(".reveal-line-1", { xPercent: -20, opacity: 0 }, 0.4)
        .from(".reveal-line-2", { xPercent: 20, opacity: 0 }, 0.5)
        .from(".reveal-line-3", { xPercent: -10, opacity: 0 }, 0.6)
        .to(".reveal-text-item .char", {
          yPercent: -100,
          opacity: 1,
          stagger: 0.01,
          duration: 0.8,
        }, 0.5);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#fafafa] overflow-hidden font-sans text-black">
      
      <div className="absolute inset-0 z-0 flex justify-between px-[10%] opacity-[0.03] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px h-full bg-black" />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 lg:block hidden">
        <div className="image-tile image-tile-1 absolute top-[26%] left-[8%] w-48 h-64  ">
          <img src={img.black} className="w-full h-full object-cover rounded" alt="" />
        </div>
        <div className="image-tile image-tile-2 absolute top-[12%] right-[10%] w-40 h-52">
          <img src={img.black} className="w-full h-full object-cover rounded " alt="" />
        </div>
        <div className="image-tile image-tile-3 absolute bottom-[15%] right-[22%] w-56 h-40   ">
          <img src={img.black} className="w-full h-full object-cover rounded" alt="" />
        </div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center z-20">
        <div className="hero-title-main text-center">
          <div className="overflow-hidden mb-6">
            <div className="meta-label flex items-center justify-center gap-2">
              <Hash className="text-orange-500" size={14} />
              <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-60">DIGITAL MARKETING AGENCY</span>
            </div>
          </div>
          <div className="overflow-hidden py-4">
            <h1 className="text-[14vw] font-black leading-[0.8] tracking-[ -0.05em] uppercase">
              {splitText("Mind")} <br />
              <span className="text-orange-500 font-light italic">{splitText("Story")}</span>
            </h1>
          </div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">Keep Scrolling</span>
        </div>
      </div>

      <div 
        className="reveal-full absolute inset-0 bg-[#fafafa] z-40 flex items-center justify-center"
        style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
      >
        <div className="max-w-6xl w-full px-12">
          <div className="flex flex-col gap-2 items-start text-left">
            <div className="reveal-line-1 overflow-hidden py-2">
               <h2 className="reveal-text-item text-[8vw] font-black uppercase leading-none tracking-tighter">
                {splitText("Architecture")}
               </h2>
            </div>
            <div className="reveal-line-2 overflow-hidden py-2 pl-[10%] border-l-4 border-orange-500">
               <h2 className="reveal-text-item text-[8vw] font-black uppercase leading-none tracking-tighter text-orange-500 italic">
                {splitText("Meets")}
               </h2>
            </div>
            <div className="reveal-line-3 overflow-hidden py-2">
               <h2 className="reveal-text-item text-[8vw] font-black uppercase leading-none tracking-tighter">
                {splitText("Emotion.")}
               </h2>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-12 reveal-text-item">
             <button className="relative overflow-hidden group bg-black text-white px-12 py-6 rounded-none transition-all duration-500 hover:bg-orange-600">
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                  Start a Project <ArrowUpRight size={16} />
                </span>
             </button>
             <p className="text-xs font-medium uppercase tracking-widest opacity-40 max-w-50">
               Available for worldwide collaboration             </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;800&display=swap');
        body { background: #FDFDFD; }
        h1, h2, span, button { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}} />
    </div>
  );
};

export default MindStoryHero;