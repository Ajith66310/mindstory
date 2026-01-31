import { useRef } from "react";
import gsap from 'gsap'
 const ElastiicLine = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const baseLine = "M 0 50 Q 500 50 1000 50";

  const handleMouseMove = (e) => {
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
      className="w-full h-20 flex items-center cursor-pointer overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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