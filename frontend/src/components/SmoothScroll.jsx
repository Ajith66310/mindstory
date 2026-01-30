import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Integrate Lenis with GSAP ScrollTrigger
    const scrollUpdate = ScrollTrigger.update;
    lenis.on('scroll', scrollUpdate);
    
    const tickerFunc = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFunc);
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Proper cleanup
      cancelAnimationFrame(rafId);
      lenis.off('scroll', scrollUpdate);
      gsap.ticker.remove(tickerFunc);
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}