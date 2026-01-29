import React, { useRef } from 'react';
import gsap from 'gsap';

const BrandCard = ({ brand, index, brandItemsRef }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseEnter = () => {
    // Card animation
    gsap.to(cardRef.current, {
      scale: 1.08,
      zIndex: 10,
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.to(contentRef.current, {
      y: -10,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Dispatch custom event to update global cursor
    const event = new CustomEvent('cursorHover', {
      detail: { 
        scale: 3, 
        color: brand.color 
      }
    });
    window.dispatchEvent(event);
  };

  const handleMouseLeave = () => {
    // Card animation
    gsap.to(cardRef.current, {
      scale: 1,
      zIndex: 1,
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.to(contentRef.current, {
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Dispatch custom event to reset global cursor
    const event = new CustomEvent('cursorHover', {
      detail: { 
        scale: 1, 
        color: '#f5a300' 
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        brandItemsRef.current[index] = el;
      }}
      className="relative group cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative h-80 rounded-3xl overflow-hidden shadow-lg transition-shadow duration-500 group-hover:shadow-2xl"
        style={{ backgroundColor: brand.bg }}
      >
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${brand.color}, transparent)`,
          }}
        />

        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div ref={contentRef} className="relative z-10 h-full flex flex-col items-center justify-center p-8">
          
          {/* Logo */}
          <div className="mb-6 transition-all duration-500 group-hover:scale-110">
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`}
              className="w-24 h-24 object-contain"
              style={{
                filter: `drop-shadow(0 10px 30px ${brand.color}40)`,
              }}
            />
          </div>

          {/* Brand Name */}
          <h3 
            className="text-3xl font-black mb-2 tracking-tight transition-colors duration-500"
            style={{ color: brand.color }}
          >
            {brand.name}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-gray-600 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {brand.tagline}
          </p>

          {/* Decorative accents */}
          <div 
            className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 rounded-tr-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-60"
            style={{ borderColor: brand.color }}
          />
          <div 
            className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 rounded-bl-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-60"
            style={{ borderColor: brand.color }}
          />
        </div>

        {/* Expanding circle */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full scale-0 group-hover:scale-[25] transition-transform duration-1000 ease-out opacity-10"
          style={{ backgroundColor: brand.color }}
        />
      </div>
    </div>
  );
};

export default BrandCard;