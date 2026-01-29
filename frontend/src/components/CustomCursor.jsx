import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.3 });
      gsap.to(cursorDotRef.current, { x: e.clientX, y: e.clientY, duration: 0.15 });
    };

    // Global Listeners for hover state
    const handleCursorHover = (e) => {
      const { scale, color } = e.detail;
      gsap.to(cursorRef.current, {
        scale: scale || 1,
        backgroundColor: color || '#f5a300',
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('cursorHover', handleCursorHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('cursorHover', handleCursorHover);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-9999  bg-[#f5a300] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div ref={cursorDotRef} className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export default CustomCursor;