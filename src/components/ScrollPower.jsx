import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../styles/scrollpower.scss"

gsap.registerPlugin(ScrollTrigger);

const ScrollPower = () => {
  const containerRef = useRef(null);
  const innerDivRef = useRef(null);
  const animatedServicesRef = useRef(null);
  const layoutRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const innerDiv = innerDivRef.current;
    const animatedServices = animatedServicesRef.current;
    const layout = layoutRef.current;

    // Initial states
    gsap.set(innerDiv, { 
      width: '0vw', 
      height: '0vh', 
      opacity: 0,
      scale: 0.8 // Start slightly scaled down
    });
    gsap.set(animatedServices, { opacity: 0 });
    gsap.set(layout, { opacity: 0 });

    // Create the ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 80%', // Start earlier
      end: 'center center', // End at center of viewport
      scrub: 2, // Increase scrub value for smoother animation
      markers: false, // Set to true for debugging
      smoothTouch: true, // Smoother touch device scrolling
    });

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger,
      defaults: {
        ease: "power1.inOut", // Changed to a smoother ease
      }
    });

    tl.to(innerDiv, {
      width: '90vw',
      height: '70vh',
      opacity: 1,
      scale: 1,
      duration: 5,
      ease: "power2.out",
    })
    .to(layout, {
      opacity: 1,
      duration: 1,
    }, "-=0.5") // Overlap with previous animation
    .to(animatedServices, {
      opacity: 1,
      duration: 2,
    }, "-=0.3"); // Slight overlap for smoother transition

    // Cleanup
    return () => {
      scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="about-container-scrollpower">
      <div ref={innerDivRef} className="about-inner-scrollpower">
      </div>
    </div>
  );
};

export default ScrollPower;