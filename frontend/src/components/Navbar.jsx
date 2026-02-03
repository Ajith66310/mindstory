import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { img, navItems } from '../assets/assest.js';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const dropdownRefs = useRef({});

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null) {
        const dropdown = dropdownRefs.current[activeDropdown];
        if (dropdown && !dropdown.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-transparent backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-black tracking-tight text-black">
          MINDSTORY
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              ref={(el) => (dropdownRefs.current[index] = el)}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
              onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
            >
              {item.hasDropdown ? (
                <button
                  className="flex items-center gap-1 text-sm font-semibold tracking-wide uppercase text-black hover:text-[#ec9a03] transition-colors duration-300"
                >
                  {item.name}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${
                      isActive ? 'text-[#ec9a03]' : 'text-black hover:text-[#ec9a03]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${
                    activeDropdown === index
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="py-2">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        onClick={() => setActiveDropdown(null)}
                        className={({ isActive }) =>
                          `block px-6 py-3 text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-[#ec9a03] text-white'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-[#ec9a03] hover:pl-8'
                          }`
                        }
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <NavLink
            to="/contact"
            ref={buttonRef}
            className="group relative flex items-center justify-center bg-[#ec9a03] text-black w-40 h-14 rounded-full font-black text-[10px] tracking-[0.2em] uppercase overflow-hidden"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

            <span ref={textRef} className="relative z-10 flex items-center gap-2">
              Let's Talk
              <ArrowUpRight 
                size={16} 
                className="transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" 
              />
            </span>
          </NavLink>
        </div>
      </div>

      <div className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2">
        <button className="flex flex-col gap-1.5 p-2">
          <span className="w-6 h-0.5 bg-black transition-all"></span>
          <span className="w-6 h-0.5 bg-black transition-all"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;