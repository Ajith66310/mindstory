import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ChevronDown, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { img, navItems } from '../assets/assest.js';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!buttonRef.current || !textRef.current) return;

    const button = buttonRef.current;
    const text = textRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = button.getBoundingClientRect();

      const x = (clientX - (left + width / 2)) * 0.3;
      const y = (clientY - (top + height / 2)) * 0.3;

      gsap.to(button, {
        x: x,
        y: y,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(text, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to([button, text], {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1.2, 0.4)"
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-8 bg-transparent">
        <div className="max-w-360 mx-auto px-6 lg:px-12 flex items-center justify-between">

          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-6 px-4 py-2 hover:opacity-70 transition-all duration-500 group"
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-black">
                MENU
              </span>
              <div className="flex flex-col gap-1 items-end text-black">
                <span className="w-6 h-0.5 bg-current group-hover:w-4 transition-all"></span>
                <span className="w-6 h-0.5 bg-current"></span>
              </div>
            </button>
          </div>


          <div className="flex-1 flex justify-end">
            <NavLink
              to="/contact"
              ref={buttonRef}
              className="group relative hidden md:flex items-center justify-center bg-[#ec9a03] text-black w-40 h-14 rounded-full font-black text-[10px] tracking-[0.2em] uppercase overflow-hidden"
            >
       
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

              <span ref={textRef} className="relative z-10 flex items-center gap-2">
                Let's Talk
                <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </NavLink>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[#0a0a0a] z-60 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <div className="flex justify-between items-center px-6 lg:px-12 py-8">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setActiveDropdown(null);
            }}
            className="text-white hover:bg-white/10 p-4 rounded-full transition-all"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center h-[80%] px-10 gap-10 lg:gap-32">
          <nav className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <div className="flex items-center gap-4">
                  <NavLink
                    to={item.path}
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                    className={`text-5xl md:text-8xl font-medium tracking-tighter lowercase transition-all duration-500 ${activeDropdown === index ? 'text-[#ec9a03] translate-x-4' : 'text-white hover:text-orange-400'
                      }`}
                  >
                    {item.name}.
                  </NavLink>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`text-[#ec9a03] transition-transform duration-500 ${activeDropdown === index ? 'rotate-180' : ''}`}
                      size={40}
                    />
                  )}
                </div>
              </div>
            ))}
          </nav>

          <div className="w-full max-w-xs h-75 flex flex-col justify-center border-l border-white/10 pl-10">
            {activeDropdown !== null && navItems[activeDropdown].hasDropdown ? (
              <div className="space-y-4">
                <p className="text-[#ec9a03] text-xs font-bold tracking-widest uppercase mb-6 italic">/ Explore</p>
                {navItems[activeDropdown].subItems.map((sub) => (
                  <NavLink
                    key={sub.name}
                    to={sub.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl md:text-2xl text-white/70 hover:text-white transition-colors"
                  >
                    {sub.name}
                  </NavLink>
                ))}
              </div>
            ) : (
              <div className="opacity-20">
                <p className="text-white text-sm tracking-[0.2em] uppercase">Select a category to explore our world.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;