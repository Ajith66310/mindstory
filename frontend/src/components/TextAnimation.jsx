import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessAnimation = () => {
  const component = useRef(null);
  const triggerRef = useRef(null);
  const wordsRef = useRef([]);
  const paragraphRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const words = wordsRef.current.filter(Boolean);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1,
        }
      });

      gsap.set(paragraphRef.current, { color: '#808080' });
      
      gsap.set(words.slice(1), { opacity: 0, y: 30 });
      gsap.set(words[0], { opacity: 1, y: 0 });

      tl.to(paragraphRef.current, { color: '#1a1a1a', duration: 0.2 })
        .to(words[0], { opacity: 0, y: -30, duration: 0.4 })
        .to(words[1], { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
        .to({}, { duration: 0.5 })
        .to(words[1], { opacity: 0, y: -30, duration: 0.4 })
        .to(words[2], { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
        .to({}, { duration: 0.5 });

    }, component);
    return () => ctx.revert();
  }, []);

  const styles = {
    section: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 10%',
      backgroundColor: '#fafafa',
      backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
    },
    paragraph: {
      fontFamily: '"Sohne", "Helvetica Neue", Arial, sans-serif',
      fontSize: 'clamp(1.8rem, 4.5vw, 3.8rem)',
      lineHeight: '1.4',
      fontWeight: '400',
      textAlign: 'center',
      maxWidth: '1300px',
      margin: 0,
      letterSpacing: '-0.02em',
    },
    accentWrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 4px',
      verticalAlign: 'middle',
    },
    wordStack: {
      display: 'inline-grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
      justifyItems: 'center',
      minWidth: '260px', 
      height: '1.5em', 
      overflow: 'hidden',
      position: 'relative',
      margin: '0 2px',
    },
    highlight: {
      gridArea: '1 / 1 / 2 / 2',
      fontWeight: '600',
      color: '#F5A623',
      whiteSpace: 'nowrap',
      alignSelf: 'center',
      paddingBottom: '0.3em',
      letterSpacing: '-0.01em',
    },
    quote: {
      fontFamily: '"Canela", "Freight Display", Georgia, serif',
      fontWeight: '300',
      fontSize: '1.6em',
      color: '#1a1a1a',
      lineHeight: '1',
      fontStyle: 'normal',
    }
  };

  return (
    <div ref={component}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet" />
      <style>{`
        @font-face {
          font-family: 'Sohne';
          src: local('Helvetica Neue'), local('Arial');
          font-weight: 400;
        }
        @font-face {
          font-family: 'Canela';
          src: local('Freight Display'), local('Georgia');
          font-weight: 300;
        }
      `}</style>
      
      <div ref={triggerRef}>
        <section style={styles.section}>
          <p ref={paragraphRef} style={styles.paragraph}>
            In a digital-first world, your brand deserves more than just a presence. 
            We partner with visionary companies to 
            <span style={styles.accentWrapper}>
              <span style={styles.quote}>"</span>
              <span style={styles.wordStack}>
                <span ref={el => wordsRef.current[0] = el} style={styles.highlight}>Design</span>
                <span ref={el => wordsRef.current[1] = el} style={styles.highlight}>Develop</span>
                <span ref={el => wordsRef.current[2] = el} style={styles.highlight}>Deploy</span>
              </span>
              <span style={styles.quote}>"</span>
            </span>
            high-impact strategies that drive measurable growth.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProcessAnimation;