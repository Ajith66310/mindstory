import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { ChevronDown, ArrowUpRight, Menu, X, Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { navItems } from '../assets/assest.js';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null); 
  
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuTl = useRef(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateNavbar = () => {
      const currentScrollY = window.pageYOffset;
      const diff = currentScrollY - lastScrollY;
      if (diff > 5 && !isMenuOpen) {
        gsap.to(navbarRef.current, { y: '-100%', duration: 0.2, ease: "power4.inOut" });
      } else if (diff < -5) {
        gsap.to(navbarRef.current, { y: '0%', duration: 0.2, ease: "power4.out" });
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', updateNavbar, { passive: true });
    return () => window.removeEventListener('scroll', updateNavbar);
  }, [isMenuOpen]);

  useEffect(() => {
    menuTl.current = gsap.timeline({ paused: true })
      .fromTo(mobileMenuRef.current, { y: '-100%' }, { y: '0%', duration: 0.6, ease: "expo.out" })
      .from(".mobile-link", { y: 30, opacity: 0, stagger: 0.08, duration: 0.4, ease: "power3.out" }, "-=0.3");
  }, []);

  useEffect(() => {
    isMenuOpen ? menuTl.current.play() : menuTl.current.reverse();
  }, [isMenuOpen]);

  const handleMobileClick = (item, index) => {
    if (item.hasDropdown) {
      setMobileExpanded(mobileExpanded === index ? null : index);
    } else {
      setIsMenuOpen(false);
      navigate(item.path);
    }
  };

  return (
    <>
      <nav ref={navbarRef} className="fixed top-0 left-0 right-0 z-110 w-full bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <NavLink to="/" className="z-120 text-xl md:text-2xl font-black tracking-tighter text-black">
            MINDSTORY
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <NavLink to={item.path} className="flex items-center gap-1 text-[11px] font-bold tracking-[0.15em] uppercase text-black cursor-pointer">
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} />}
                </NavLink>
                {item.hasDropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 pt-4">
                    <div className="w-56 bg-white shadow-2xl rounded-xl py-3 border border-gray-100">
                      {item.subItems.map((sub) => (
                        <NavLink key={sub.name} to={sub.path} className="block px-6 py-2 text-[12px] font-medium text-gray-400 hover:text-black">
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <NavLink to="/contact" className="hidden lg:flex items-center justify-center bg-[#ec9a03] text-black h-12 w-36 rounded-full font-black text-[10px] tracking-widest uppercase active:scale-95 transition-transform">
              Let's Talk <ArrowUpRight size={18} className="ml-1" />
            </NavLink>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 z-120 text-black bg-black/5 rounded-full">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-100 bg-[#fafafa] flex flex-col pt-24 pb-10 px-6 lg:hidden overflow-y-auto"
        style={{ pointerEvents: isMenuOpen ? 'all' : 'none' }}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <div key={item.name} className="mobile-link border-b border-black/5 last:border-none">
              <div 
                onClick={() => handleMobileClick(item, index)}
                className="flex items-center justify-between py-5 cursor-pointer"
              >
                <span className="text-2xl font-black uppercase tracking-tighter text-black">
                  {item.name}
                </span>
                {item.hasDropdown && (
                  mobileExpanded === index ? <Minus size={20} /> : <Plus size={20} />
                )}
              </div>

              {item.hasDropdown && (
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    mobileExpanded === index ? 'max-h-125 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#ec9a03]/30">
                    <NavLink to={item.path} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-black uppercase tracking-tight">
                      Explore {item.name}
                    </NavLink>
                    {item.subItems.map(sub => (
                      <NavLink 
                        key={sub.name} 
                        to={sub.path} 
                        onClick={() => setIsMenuOpen(false)} 
                        className="text-lg font-bold text-gray-500 hover:text-black uppercase tracking-tight"
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <NavLink 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="mobile-link mt-8 flex items-center justify-between bg-[#ec9a03] p-6 rounded-4xl font-black uppercase tracking-widest text-sm shadow-xl shadow-orange-500/10"
          >
            Start a Project <ArrowUpRight size={24} />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;