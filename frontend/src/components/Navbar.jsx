import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { img } from '../assets/assest.js';
import { navItems } from '../assets/assest.js';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);



  return (
    <>
 
      <nav className="fixed top-0 left-0 right-0 z-50 py-8 bg-transparent">
        <div className="max-w-350 mx-auto px-6 lg:px-12 flex items-center justify-between">


          <div className="flex-1">
            <NavLink to="/">
              <img
                className="h-10 w-auto "
                src={img.brandlogo}
                alt="Brand Logo"
              />
            </NavLink>
          </div>

        
          <div className="flex items-center ">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-6 px-8 py-4 bg-white/10 lg:backdrop-blur-xl border border-white/20 rounded-full lg:hover:bg-white hover:text-black transition-all duration-500 group"
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-black">
                MENU
              </span>
              <div className="flex flex-col gap-1 items-end text-black">
                <span className="w-6 h-0.5 bg-current group-hover:w-4 transition-all "></span>
                <span className="w-6 h-0.5 bg-current"></span>
              </div>
            </button>
          </div>

  
          <div className="flex-1 flex justify-end">
            <NavLink
              to="/contact"
              className="hidden md:flex items-center gap-2 bg-[#ec9a03] text-black px-6 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-white hover:border hover:border-orange-300 transition-colors uppercase"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>
      </nav>

   
      <div
        className={`fixed inset-0 bg-[#0a0a0a] z-60 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        {/* Header inside Overlay */}
        <div className="flex justify-between items-center px-6 lg:px-12 py-8">
          {/* <span className="text-[#ec9a03] text-sm tracking-widest font-bold">MindStory</span> */}
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
              <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-500">
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