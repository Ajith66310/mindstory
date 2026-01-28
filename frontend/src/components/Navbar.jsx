import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Copy } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Works', path: '/works' },
    { name: 'Learn', path: '/learn' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6">
        <div className="max-w-350 mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Brand Name - Left */}
          <div className="flex-1">
            <h1 className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase">
              MINDSTORY
            </h1>
          </div>

          {/* Center Section - Pill Menu */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-6 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <span className="text-white text-xs font-semibold tracking-[0.3em] uppercase">
                MENU
              </span>
              <div className="flex flex-col gap-1 items-end">
                <span className="w-6 h-px bg-white group-hover:w-4 transition-all"></span>
                <span className="w-6 h-px bg-white"></span>
              </div>
            </button>
          
          </div>

          {/* Contact - Right */}
          <div className="flex-1 flex justify-end">
            <NavLink
              to="/contact"
              className="text-white text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#121212] z-60 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Close Button for Overlay */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-300"
        >
          <X size={40} strokeWidth={1} />
        </button>

        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col gap-4 text-center">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-5xl md:text-8xl font-light text-white hover:text-gray-400 transition-colors lowercase"
              >
                {item.name}.
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;