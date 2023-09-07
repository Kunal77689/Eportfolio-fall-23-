import React, { useEffect, useRef, useState } from 'react';
import './ParallaxComponentProjects.css';

const ParallaxComponentProjects = () => {
  const containerRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const scrollPosition = window.scrollY;

      setScrollProgress(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headingStyle = {
    fontSize: `${Math.min(24 + scrollProgress * 0.05, 48)}px`,
    opacity: Math.min(1, scrollProgress * 0.002),
    transform: `translateX(${Math.min(0, scrollProgress - 2000)}px)`, // Adjust trigger point here
  };

  return (
    <div className="parallax-container1" ref={containerRef}>
      <div className="parallax-content1">
        <h2 className="parallax-heading1" style={headingStyle}>
          PROJECTS
        </h2>
        <p>
          "Never begin the day until it is finished on paper"
        </p>
      </div>
    </div>
  );
};

export default ParallaxComponentProjects;
