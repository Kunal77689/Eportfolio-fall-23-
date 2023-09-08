import React, { useEffect, useRef, useState } from 'react';
import './ParallaxComponent.css';

const ParallaxComponent = () => {
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
    transform: `translateX(${Math.min(0, scrollProgress - 300)}px)`,
  };

  return (
    <div className="parallax-container" ref={containerRef}>
      <div className="parallax-content">
        <h2 className="parallax-heading" style={headingStyle}>
          PREVIOUS EXPERIENCE
        </h2>
        <p>
          "Experience is what you get while looking for something else"
        </p>
      </div>
    </div>
  );
};

export default ParallaxComponent;
