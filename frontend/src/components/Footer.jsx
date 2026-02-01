import React, { useEffect, useRef } from 'react';
import {
  Mail,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Phone,
  Clock,
} from "lucide-react";
import { img } from "../assets/assest.js";

const Footer = () => {
  const newsletterRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const footer = document.getElementById('footer-main');
      if (footer) {
        const footerTop = footer.offsetTop;
        const offset = scrolled - footerTop;
        if (offset > -500) {
          footer.style.setProperty('--scroll-offset', `${offset * 0.5}px`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter submitted');
  };

  return (
    <footer id="footer-main" className="relative text-white overflow-hidden bg-black">

      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden hidden sm:block">

        <h2
          className=" absolute bottom-[-5%] left-[30%] text-[20vw] font-black leading-none tracking-tighter opacity-15"
          style={{ color: '#f5a300', textTransform: 'uppercase' }}
        >
          MIND
        </h2>

        <div className="absolute top-2 right-35 h-full flex items-center translate-x-1/2">
          <h2
            className="text-[15vw]  md:text-[20vw] font-black leading-none tracking-tighter opacity-15"
            style={{
              color: '#f5a300',
              textTransform: 'uppercase',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)'
            }}
          >
           story
          </h2>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-150 h-150 bg-[#f5a300]/10 rounded-full blur-[120px] animate-float-orb-1" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-orange-600/10 rounded-full blur-[100px] animate-float-orb-2" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(245, 163, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 163, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            transform: 'translateY(var(--scroll-offset, 0px))',
          }}
        />
      </div>

      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5a300]/10 rounded-full border border-[#f5a300]/20">
                <div className="w-2 h-2 bg-[#f5a300] rounded-full animate-pulse" />
                <span className="text-xs font-bold text-[#f5a300] uppercase tracking-widest">Stay Connected</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
                Get Marketing <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f5a300] to-orange-400">Insights Weekly</span>
              </h2>
            </div>

            <div className="relative">
              <form onSubmit={handleNewsletterSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="space-y-4">
                  <input type="email" placeholder="Your Email Address" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-[#f5a300]/50" required />
                  <button type="submit" className="w-full px-6 py-4 bg-[#f5a300] text-white font-bold rounded-xl hover:bg-orange-600 transition-all">
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            <div className="lg:col-span-1">
              <img src={img.brandlogowhite} alt="Mindstory" className="h-12 w-auto mb-8" />
              <p className="text-gray-400 leading-relaxed">
                A trusted digital marketing agency in Kerala delivering creative strategies and lasting brand growth.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8 text-[#f5a300]">Services</h3>
              <ul className="space-y-4 text-gray-400">
                {['Digital Marketing', 'Website Development', 'Logo & Branding', 'SEO Optimization'].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                    <ArrowUpRight size={14} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8 text-[#f5a300]">Contact</h3>
              <div className="space-y-4">
                <a href="tel:+918281610051" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone size={18} className="text-[#f5a300]" /> +91 82816 10051
                </a>
                <a href="mailto:hello@mindstory.in" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail size={18} className="text-[#f5a300]" /> hello@mindstory.in
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8 text-[#f5a300]">Follow</h3>
              <div className="flex gap-4">
                {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-lg hover:bg-[#f5a300] hover:text-black transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>©2025 Mindstory. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-orb-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        .animate-float-orb-1 { animation: float-orb-1 20s infinite alternate; }
      `}</style>
    </footer>
  );
};

export default Footer;