import React, { useEffect, useRef, useState } from 'react';
import './ExperienceComponent.css';

const ExperienceComponent = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  const containerStyle = {
    transform: `translateX(${isVisible1 || isVisible2 || isVisible3 ? '0' : '100%'})`,
    opacity: isVisible1 || isVisible2 || isVisible3 ? 1 : 0,
    transition: 'transform 0.6s ease, opacity 0.6s ease',
  };

  const imageStyle = {
    transform: `scale(${Math.min(1 + scrollProgress * 0.001, 2)})`,
    transition: 'transform 0.6s ease',
  };

  const paragraphStyle = {
    transform: `scale(${Math.min(1 + scrollProgress * 0.001, 2)})`,
    transition: 'transform 0.6s ease',
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollProgress(scrollPosition);

      // Adjust these trigger points
      const triggerPoint1 = 500;
      const triggerPoint2 = 1450;
      const reductionSpeed = 0.001; // Adjust the speed of reduction

      if (scrollPosition > triggerPoint2) {
        // Gradually reduce size and opacity
        const progress = (scrollPosition - triggerPoint2) * reductionSpeed;
        setIsVisible1(progress <= 1);
        setIsVisible2(progress <= 1);
        setIsVisible3(progress <= 1);

        if (progress <= 1) {
          containerRef1.current.style.transform = `scale(${1 - progress})`;
          containerRef2.current.style.transform = `scale(${1 - progress})`;
          containerRef3.current.style.transform = `scale(${1 - progress})`;
          containerRef1.current.style.opacity = 1 - progress;
          containerRef2.current.style.opacity = 1 - progress;
          containerRef3.current.style.opacity = 1 - progress;
        }
      } else if (scrollPosition > triggerPoint1) {
        setIsVisible1(true); // Start appearing and increasing in size when reaching the first trigger point
        containerRef1.current.style.transform = 'scale(1)';
        containerRef1.current.style.opacity = 1;

        setIsVisible2(true); // Start appearing and increasing in size when reaching the first trigger point
        containerRef2.current.style.transform = 'scale(1)';
        containerRef2.current.style.opacity = 1;

        setIsVisible3(true); // Start appearing and increasing in size when reaching the first trigger point
        containerRef3.current.style.transform = 'scale(1)';
        containerRef3.current.style.opacity = 1;
      } else {
        setIsVisible1(false); // Disappear if scrolling above the first trigger point
        setIsVisible2(false);
        setIsVisible3(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`experience-container ${isVisible1 ? 'visible' : ''}`}
        style={containerStyle}
        ref={containerRef1}
      >
        <div className="experience-content">
          <img
            src="https://avatars.githubusercontent.com/u/5665626?s=200&v=4"
            alt="Carnegie Learning"
            className={`experience-image ${isVisible1 ? 'visible' : ''}`}
            style={imageStyle}
          />
          <div
            className={`experience-carnegie-container ${isVisible1 ? 'visible' : ''}`}
          ></div>
          <p
            className={`experience-paragraph ${isVisible1 ? 'visible' : ''}`}
            style={paragraphStyle}
          >
            Backend developer at Carnegie Learning
          </p>
        </div>
      </div>

      <div
        className={`experience-container2 ${isVisible2 ? 'visible' : ''}`}
        style={containerStyle}
        ref={containerRef2}
      >
        <div className="experience-content2">
          <img
            src="https://www.mun.ca/appinclude/stratum/favicon/favicon-192x192.png"
            alt="DIAG Lab MUN"
            className={`experience-image2 ${isVisible2 ? 'visible' : ''}`}
            style={imageStyle}
          />
          <div
            className={`experience-carnegie-container2 ${isVisible2 ? 'visible' : ''}`}
          ></div>
          <p
            className={`experience-paragraph2 ${isVisible2 ? 'visible' : ''}`}
            style={paragraphStyle}
          >
            Full-Stack Developer at DIAG Lab MUN
          </p>
        </div>
      </div>

      <div
        className={`experience-container3 ${isVisible3 ? 'visible' : ''}`}
        style={containerStyle}
        ref={containerRef3}
      >
        <div className="experience-content3">
          <img
            src="https://static.mytuner.mobi/media/tvos_radios/SyZzeeqvXb.jpg"
            alt="DIAG Lab MUN"
            className={`experience-image3 ${isVisible3 ? 'visible' : ''}`}
            style={imageStyle}
          />
          <div
            className={`experience-carnegie-container3 ${isVisible3 ? 'visible' : ''}`}
          ></div>
          <p
            className={`experience-paragraph3 ${isVisible3 ? 'visible' : ''}`}
            style={paragraphStyle}
          >
            Software Developer at CHMR-FM MUN
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
