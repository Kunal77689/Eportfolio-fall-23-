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

  const minScroll = 1000; // Adjust this value to the desired scroll position where it starts appearing
  const maxScroll = 1900; // Adjust this value to the scroll position where it should stop in the center

  const headingStyle = {
    fontSize: `${Math.min(24 + (scrollProgress - minScroll) * 0.05, 48)}px`,
    opacity: Math.min(1, (scrollProgress - minScroll) * 0.002),
    transform: `translateX(${Math.min(0, (scrollProgress - minScroll) * 0.2)}px)`, // Adjust trigger point here
  };

  const headingVisible = scrollProgress >= minScroll && scrollProgress <= maxScroll;

  return (
    <div className={`parallax-container1 ${headingVisible ? 'visible' : ''}`} ref={containerRef}>
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
