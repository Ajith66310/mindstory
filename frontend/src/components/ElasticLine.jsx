import { useRef, useState } from "react";
import gsap from 'gsap';

const ElastiicLine = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const baseLine = "M 0 50 Q 500 50 1000 50";

  const handleMouseMove = (e) => {
    if (!hasInteracted) setHasInteracted(true);
    
    const { left, width, top } = svgRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - left) / width) * 1000;
    const mouseY = e.clientY - top;
    const newPath = `M 0 50 Q ${mouseX} ${mouseY} 1000 50`;

    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pathRef.current, {
      attr: { d: baseLine },
      duration: 1.5,
      ease: "elastic.out(1, 0.2)",
    });
  };

  return (
    <div 
      className="relative w-full h-32 flex items-center justify-center cursor-pointer overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Visual Hint Layer */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 pointer-events-none ${
          hasInteracted ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="animate-pulse flex flex-col items-center gap-2">
          <p className="text-[11px] font-medium tracking-[0.2em] text-gray-500 uppercase">
            Touch and Hold
          </p>
        </div>
      </div>

      <svg 
        ref={svgRef}
        width="100%" 
        height="100" 
        viewBox="0 0 1000 100" 
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <path
          ref={pathRef}
          d={baseLine}
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default ElastiicLine;